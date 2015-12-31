var Aircall = require('./aircall');

/**
 * Create an Aircall client
 *
 * @param {String} apiID
 * @param {String} apiToken
 * @return {Aircall}
 */

module.exports = function aircall(apiID, apiToken) {
  if (!apiID) throw new Error('Aircall requires an apiID.');
  if (!apiToken) throw new Error('Aircall requires an apiToken.');
  else return new Aircall(apiID, apiToken);
};
