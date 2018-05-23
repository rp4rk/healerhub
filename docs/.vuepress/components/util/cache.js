import axios from 'axios';

/**
 * Fetches a value from an object safely
 * @param {Object} obj - The object to traverse
 * @param {Array} path - The path to take
 */
const get = (obj, path) =>
  path.reduce((current, key) => (current ? current[key] : undefined), obj);


const set = (obj, path, value) => {
  let currentLevel = obj;

  path.forEach((key, i) => {
    // End of path, set value
    if (i === path.length - 1) {
      currentLevel[key] = value;
      return;
    }

    // Navigate
    if (currentLevel[key]) {
      currentLevel = currentLevel[key];
      return;
    }

    // Create path
    if (!currentLevel[key]) {
      currentLevel[key] = {};
      currentLevel = currentLevel[key];
    }
  })
}

// Yep, the cache is an object
const cache = {};

// A real use for proxies?
export const http = new Proxy(axios, {
  get(target, propKey) {
    if (propKey !== 'get') return target[propKey];

    return (...args) => {
      // Return the cached value if it exists
      const cachedValue = get(cache, [...args]);
      if (!!cachedValue) {
        return Promise.resolve(cachedValue);
      }

      // Fetch request and store the value!
      return target[propKey](...args)
        .then(val => {
          set(cache, args, val);
          return val;
        });
    }
  },
});
