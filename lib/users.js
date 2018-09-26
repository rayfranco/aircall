var defaults = require('defaults');

module.exports = Users;

function Users(API) {
  this.API = API;
};

Users.prototype.list = function(callback, options) {
  var options = defaults(options, {
    // page: 1, // Pagination for list of objects
    // per_page: 20, // Number of objects fetched per request
    // order: 'asc', // Reorder entries per creation date, asc or desc
    // from: (none), // Set a minimal creation date for objects	(UNIX timestamp)
    // to: (none)  // Set a maximal creation date for objects (UNIX timestamp)
  });

  this.API.get('/users', options, callback);
};

Users.prototype.get = function(id, callback, options) {
  this.API.get('/users/' + id, options, callback);
};
