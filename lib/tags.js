var defaults = require('defaults');

module.exports = Tags;

function Tags(API) {
  this.API = API;
};

Tags.prototype.list = function (callback, options) {
  var options = defaults(options, {
    // page: 1, // Pagination for list of objects
    // per_page: 50, // Number of objects fetched per request
    // order: 'asc', // Reorder entries per creation date, asc or desc
    // from: null, // Set a minimal creation date for objects	(non
    // to: null  // Set a maximal creation date for objects
  });

  this.API.get('/tags', options, callback);
};

Tags.prototype.create = function (callback, options) {
  this.API.post('/tags', options, callback);
};

Tags.prototype.get = function (id, callback, options) {
  this.API.get('/tags/' + id, options, callback);
};

Tags.prototype.update = function (id, callback, options) {
  this.API.put('/tags/' + id, options, callback);
};

Tags.prototype.delete = function (id, callback, options) {
  this.API.delete('/tags/' + id, options, callback);
};