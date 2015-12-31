var BASE_API = 'https://api.aircall.io/v1';

var request = require('superagent');

module.exports = API;

function API(apiID, apiToken) {
  this.apiID = apiID;
  this.apiToken = apiToken;
};

API.prototype.query = function(method, endpoint, options, callback) {
  request[method](BASE_API + endpoint)
    .auth(this.apiID, this.apiToken)
    .query(options)
    .end(function(err, res){
      if (err) return callback(err);
      if (res.statusCode !== 200) return callback(new Error('Bad response: ' + res.text));
      // debug('got %d conversations for page %d', res.body.items.length, res.body.page);
      return callback(null, res.body);
    });
};

API.prototype.get = function(endpoint, options, callback) {
  this.query('get', endpoint, options, callback);
};

API.prototype.post = function(endpoint, options, callback) {
  this.query('post', endpoint, options, callback);
};

API.prototype.delete = function(endpoint, options, callback) {
  this.query('delete', endpoint, options, callback);
};
