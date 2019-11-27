var defaults = require('defaults');

module.exports = Calls;

function Calls(API) {
  this.API = API;
};

Calls.prototype.list = function(callback, options) {
  options = defaults(options, {
    // page: 1, // Pagination for list of objects
    // per_page: 20, // Number of objects fetched per request
    // order: 'asc', // Reorder entries per creation date, asc or desc
    // from: (none), // Set a minimal creation date for objects	(UNIX timestamp)
    // to: (none)  // Set a maximal creation date for objects (UNIX timestamp)
  });

  this.API.get('/calls', options, callback);
};

Calls.prototype.get = function(id, callback, options) {
  this.API.get('/calls/' + id, options, callback);
};

Calls.prototype.link = function(id, link, callback, options) {
  options = defaults(options, {
    link: link
  });

  this.API.post('/calls/' + id +'/link', options, callback);
};

Calls.prototype.archive = function(id, callback, options) {
  this.API.put('/calls/' + id + '/archive', options, callback);
};

Calls.prototype.unarchive = function(id, callback, options) {
  this.API.put('/calls/' + id + '/unarchive', options, callback);
};
