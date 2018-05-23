const axios = require('axios');
const AWS = require('aws-sdk');

const API_URL = 'https://beta.wowdb.com/api/spell/1';
const baseSSMParams = {
  Name: '/healerhub/wow-version',
  Type: 'String',
  Overwrite: true,
};

const ssm = new AWS.SSM({ apiVersion: '2014-11-06' });

/**
 * Parses the bonkers format JSON from WoWDB api
 * @param {String} str - The string to be parsed
 */
const parseStupidJSON = str => JSON.parse(str.substring(1, str.length - 1));

/**
 * 
 * @param {Object} obj - The object to traverse
 * @param {Array} path - The path to take
 */
const get = (obj, path) => path.reduce((current, key) => current ? current[key] : undefined, obj);


exports.handle = async data => {
  const wowVersionResponse = await axios.get(API_URL);
  const wowVersion = get(parseStupidJSON(wowVersionResponse.data), ['Build']);

  if (!wowVersion) {
    return;
  }

  await ssm.putParameter({
    ...baseSSMParams,
    Value: String(wowVersion),
  }).promise();

  return wowVersion;
};
