var defaults = require('defaults');

module.exports = Numbers;

function Numbers(API) {
  this.API = API;
};

Numbers.prototype.list = function(callback, options) {
  var options = defaults(options, {
    page: 1, // Pagination for list of objects
    per_page: 50, // Number of objects fetched per request
    order: 'asc', // Reorder entries per creation date, asc or desc
    from: null, // Set a minimal creation date for objects	(non
    to: null  // Set a maximal creation date for objects
  });

  this.API.get('/numbers', options, callback);
};

Numbers.prototype.get = function(id, callback, options) {
  this.API.get('/numbers/' + id, options, callback);
};
