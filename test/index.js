var Aircall = require('..');
var assert = require('assert');
var util = require('util');

describe('aircall', function() {
  var aircall = Aircall(process.env.AIRCALL_ID, process.env.AIRCALL_TOKEN);

  describe('Aircall', function() {

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

    it('should be able to get company details', function(done){
      aircall.company(function(err, res) {
        if (err) return done(err);
        assert(res.company);
        done();
      });
    });

  });

  // Users

  describe('Users', function() {
    var id;

    it('should be able to get a list of users', function(done) {
      aircall.users.list(function(err, res) {
        if (err) return done(err);
        assert(res);
        assert(Array.isArray(res.users));
        id = res.users[0].id;
        done();
      });
    });

    it('should be able to get a specific user', function(done) {
      aircall.users.get(id, function(err, res) {
        if (err) return done(err);
        assert(res);
        assert.equal(res.user.id, id);
        done();
      });
    });
  });

  // Numbers

  describe('Numbers', function() {
    var id;

    it('should be able to get a list of numbers', function(done) {
      aircall.numbers.list(function(err, res) {
        if (err) return done(err);
        assert(res);
        assert(Array.isArray(res.numbers));
        id = res.numbers[0] && res.numbers[0].id;
        done();
      });
    });

    it('should be able to get a specific number', function(done) {
      aircall.numbers.get(id, function(err, res) {
        if (err) return done(err);
        assert(res);
        assert.equal(res.number.id, id);
        done();
      });
    });
  });

  // Contacts

  describe('Contacts', function() {
    var id;
    var contact = {
      first_name: 'John',
      last_name: 'Doe',
      phone_numbers: [
        {
          label: 'Work',
          value: '+33631000000'
        }
      ],
      emails: [
        {
          label: 'Work',
          value: 'john.doe@something.io'
        }
      ]
    };

    it('should be able to create a contact', function(done) {
      aircall.contacts.create(function(err, res) {
        if (err) return done(err);
        assert(res);
        assert.equal(res.contact.first_name, contact.first_name);
        id = res.contact.id
        done();
      }, contact);
    });

    it('should be able to get a list of contacts', function(done) {
      aircall.contacts.list(function(err, res) {
        if (err) return done(err);
        assert(res);
        assert(Array.isArray(res.contacts));
        done();
      });
    });

    it('should be able to get a contact', function(done) {
      aircall.contacts.get(id, function(err, res) {
        if (err) return done(err);
        assert(res);
        assert.equal(res.contact.first_name, contact.first_name);
        done();
      });
    });

    it('should be able to search a contact by phone', function(done) {
      aircall.contacts.searchByPhoneNumber(contact.phone_numbers[0].value, function(err, res) {
        if (err) return done(err);
        assert(res);
        assert(res.meta.count > 0);
        done();
      });
    });

    it('should be able to search a contact by email', function(done) {
      aircall.contacts.searchByEmail(contact.emails[0].value, function(err, res) {
        if (err) return done(err);
        assert(res);
        assert(res.meta.count > 0);
        done();
      });
    });

    it('should be able to update a contact', function(done) {
      aircall.contacts.update(id, function(err, res) {
        if (err) return done(err);
        assert(res);
        assert.equal(res.contact.first_name, 'Jane');
        done();
      }, {
        first_name: 'Jane'
      });
    });

    it('should be able to delete a contact', function(done) {
      aircall.contacts.delete(id, function(err, res) {
        if (err) return done(err);
        // actually API returns {}
        assert(res);
        done();
      });
    });
  });

  // Calls

  describe('Calls', function() {
    var id;

    it('should be able to get a list of calls', function(done) {
      aircall.calls.list(function(err, res) {
        if (err) return done(err);
        assert(res);
        assert(Array.isArray(res.calls));
        id = res.calls[0] && res.calls[0].id;
        done();
      });
    });

    it('should be able to get a specific call', function(done) {
      aircall.calls.get(id, function(err, res) {
        if (err) return done(err);
        assert(res);
        assert.equal(res.call.id, id);
        done();
      });
    });
  });
  
  // Tags

  describe('Tags', function () {
    var id;
    var tag = {
      name: 'test',
      color: '#ffffff',
      description: "A test tag"
    };

    it('should be able to create a tag', function (done) {
      aircall.tags.create(function (err, res) {
        if (err) return done(err);
        assert(res);
        assert.equal(res.tag.name, tag.name);
        id = res.tag.id
        done();
      }, tag);
    });

    it('should be able to get a list of tags', function (done) {
      aircall.tags.list(function (err, res) {
        if (err) return done(err);
        assert(res);
        assert(Array.isArray(res.tags));
        done();
      });
    });

    it('should be able to get a tag', function (done) {
      aircall.tags.get(id, function (err, res) {
        if (err) return done(err);
        assert(res);
        assert.equal(res.tag.name, tag.name);
        done();
      });
    });

    it('should be able to update a tag', function (done) {
      aircall.tags.update(id, function (err, res) {
        if (err) return done(err);
        assert(res);
        assert.equal(res.tag.name, 'test-update');
        done();
      }, {
          name: 'test-update'
        });
    });

    it('should be able to delete a tag', function (done) {
      aircall.tags.delete(id, function (err, res) {
        if (err) return done(err);
        // actually API returns {}
        assert(res);
        done();
      });
    });
  });
});
