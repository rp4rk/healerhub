const axios = require('axios');
const AWS = require('aws-sdk');
const htmlToText = require('html-to-text');

const API_URL = 'https://beta.wowdb.com/api/spell';

/**
 * Parses the bonkers format JSON from WoWDB api
 * @param {String} str - The string to be parsed
 */
const parseStupidJSON = str => JSON.parse(str.substring(1, str.length - 1));

/**
 *
 * @param {String} buildNumber - Build number from parameter store
 * @param {Object} spell - Spell object
 */
const checkBuild = (buildNumber, spell) =>
  buildNumber == (spell && spell.Build);

/**
 *
 * @param {Object} obj - The object to traverse
 * @param {Array} path - The path to take
 */
const get = (obj, path) =>
  path.reduce((current, key) => (current ? current[key] : undefined), obj);

/**
 *
 * @param {number} statusCode - HTTP Response
 * @param {array} items - Items
 */
const buildResponse = (statusCode, items) => ({
  statusCode,
  body: JSON.stringify(items),
  isBase64Encoded: false,
  headers: {
    'X-Requested-With': '*',
    'Access-Control-Allow-Headers':
      'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,OPTIONS',
  },
});

// Set up SSM
const ssm = new AWS.SSM({ apiVersion: '2014-11-06' });
const baseSSMParams = {
  Name: '/healerhub/wow-version',
};

// Set up DB connection
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-10-18' });
const baseDBParams = {
  TableName: 'HealerHub',
};

exports.handle = async (data, ctx) => {
  const spellIdString =
    get(data, ['queryStringParameters', 'spellId']) ||
    get(data, ['pathParameters', 'spellId']);
  const spellId = Number(spellIdString);
  if (!spellId) {
    throw new Error(`Invalid spell ID: ${spellId}`);
  }

  // Check if spell exists already in DB
  const queryParams = {
    ...baseDBParams,
    IndexName: 'ID-index',
    KeyConditionExpression: 'ID = :ID',
    ExpressionAttributeValues: {
      ':ID': spellId,
    },
    ScanIndexForward: false,
    Limit: get(data, ['queryStringParameters', 'limit']) || 5,
  };

  // Get build and spells
  const [currentBuildNumber, spellsRequest] = await Promise.all([
    ssm.getParameter(baseSSMParams).promise(),
    db.query(queryParams).promise(),
  ]);

  // Hey we have some cached shit!
  const spells = get(spellsRequest, ['Items']) || [];
  const haveCurrentSpell = checkBuild(
    currentBuildNumber.Parameter.Value,
    spells[0]
  );

  if (haveCurrentSpell) {
    ctx.succeed(buildResponse(200, spells));
  }

  // Fetch spell data - Note we only do this if we don't already have a current version
  const spellData = await axios.get(`${API_URL}/${spellId}`);
  const {
    ID,
    Name,
    Build,
    CastingTimeMs,
    Range,
    Icon,
    AuraDescriptionParsed,
  } = parseStupidJSON(spellData.data);
  const spellVersion = `${Name}_${ID}_${Build}`;

  // Request for writing to the DB
  const writeParams = Object.assign({}, baseDBParams, {
    Item: {
      spellVersion,
      ID,
      Name,
      Build,
      CastingTimeMs,
      Range,
      Icon: Icon.split('.')[0],
      AuraDescriptionParsed: htmlToText.fromString(AuraDescriptionParsed, {
        ignoreImage: true,
        singleNewLineParagraphs: true,
      }),
    },
  });

  // Write
  await db.put(writeParams).promise();

  // Return the spells
  return buildResponse(200, [...spells, writeParams.Item]);
};
