var defaults = require('defaults');

module.exports = Contacts;

function Contacts(API) {
  this.API = API;
};

Contacts.prototype.list = function(callback, options) {
  var options = defaults(options, {
    page: 1, // Pagination for list of objects
    per_page: 50, // Number of objects fetched per request
    order: 'asc', // Reorder entries per creation date, asc or desc
    from: null, // Set a minimal creation date for objects	(non
    to: null  // Set a maximal creation date for objects
  });

  this.API.get('/contacts', options, callback);
};

Contacts.prototype.search = function(callback, options) {
  var options = defaults(options, {
    page: 1, // Pagination for list of objects
    per_page: 50, // Number of objects fetched per request
    order: 'asc', // Reorder entries per creation date, asc or desc
    from: null, // Set a minimal creation date for objects	(non
    to: null,  // Set a maximal creation date for objects
    phone_number: null,
    email: null
  });
};

Contacts.prototype.searchByPhoneNumber = function(phoneNumber, callback, options) {
  options = defaults(options, {
    phone_number: phoneNumber
  });
  this.search(callback, options);
};

Contacts.prototype.searchByEmail = function(email, callback, options) {
  options = defaults(options, {
    email: email
  });
  this.search(callback, options);
};

Contacts.prototype.create = function(callback, options) {
  this.API.post('/contacts', options, callback);
};

Contacts.prototype.get = function(id, callback, options) {
  this.API.get('/contacts/' + id, options, callback);
};

Contacts.prototype.update = function(id, callback, options) {
  this.API.post('/contacts/' + id, options, callback);
};

Contacts.prototype.delete = function(id, callback, options) {
  this.API.delete('/contacts/' + id, options, callback);
};
