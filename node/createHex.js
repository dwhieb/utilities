const crypto = require('crypto');

const defaultLength = 10;

/**
 * Creates a random hex string of the given length.
 * @param  {Number} [len]     (optional) The length of the hex string to return. Defaults to 10.
 * @return {String}           Returns the randomly-generated hex string
 */
const createHex = (len = defaultLength) => crypto.randomBytes(len * 2).toString(`hex`);

module.exports = createHex;
