var request = require('superagent');
var defaults = require('defaults');

var API = require('./api');
var Calls = require('./calls');
var Contacts = require('./contacts');
var Numbers = require('./numbers');
var Tags = require('./tags');
var Users = require('./users');

module.exports = Aircall;

function Aircall(apiID, apiToken) {
  if (!(this instanceof Aircall)) return new Aircall(apiID, apiToken);
  this.apiID = apiID;
  this.apiToken = apiToken;
  this.API = new API(apiID, apiToken);

  this.calls = new Calls(this.API);
  this.contacts = new Contacts(this.API);
  this.numbers = new Numbers(this.API);
  this.tags = new Tags(this.API);
  this.users = new Users(this.API);
}

Aircall.prototype.ping = function(callback) {
  this.API.get('/ping', null, callback);
};

Aircall.prototype.company = function(callback) {
  this.API.get('/company', null, callback);
};
