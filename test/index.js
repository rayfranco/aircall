var assert = require('assert');
var Aircall = require('..');
var util = require('util');
var config = require('./config');

describe('aircall', function() {
  var aircall = Aircall(config.apiID, config.apiToken);

  describe('#aircall', function() {

    it('should be an instance of Object', function(done){
      assert(aircall instanceof Object);
      done();
    });

    it('should be able to ping aircall API (ping)', function(done){
      aircall.ping(function(err, res) {
        if (err) return done(err);
        assert(res);
        assert.equal(res.ping, 'pong');
        done();
      });
    });

  });

  // Users

  describe('#users', function() {
    describe('#list', function(){
      it('should be able to get a list of users', function(done) {
        aircall.users.list(function(err, res) {
          if (err) return done(err);
          assert(res);
          assert(Array.isArray(res.users));
          done();
        });
      });
    });
  });

  // Numbers

  describe('#numbers', function() {
    describe('#list', function(){
      it('should be able to get a list of numbers', function(done) {
        aircall.numbers.list(function(err, res) {
          if (err) return done(err);
          assert(res);
          assert(Array.isArray(res.numbers));
          done();
        });
      });
    });
  });

  // Contacts

  describe('#contacts', function() {
    describe('#list', function(){
      it('should be able to get a list of contacts', function(done) {
        aircall.contacts.list(function(err, res) {
          if (err) return done(err);
          assert(res);
          assert(Array.isArray(res.contacts));
          done();
        });
      });
    });
  });

  // Calls

  describe('#calls', function() {
    describe('#list', function(){
      it('should be able to get a list of calls', function(done) {
        aircall.calls.list(function(err, res) {
          if (err) return done(err);
          assert(res);
          assert(Array.isArray(res.calls));
          done();
        });
      });
    });
  });

});
