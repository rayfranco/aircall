# Aircall

An [Aircall](http://aircall.io) API for node.

## Installation

```bash
$ npm install aircall
```

## Example

Create an Aircall instance

```javascript
var aircall = require('aircall')(apiID, apiToken)
```

Get company informations

```javascript
aircall.company(function(err, res){
  console.log(res)
})
```

List contacts

```javascript
aircall.contacts.list(function(err, res){
  console.log(res.contacts)
})
```

List last phone calls by desc order

```javascript
aircall.calls.list(function(err, res){
  console.log(res)
}, {
  order: 'desc'
})
```

Get specific user

```javascript
aircall.users.get(12345, function(err, res){
  console.log(res.user)
})
```

## API

___Coming soon___

## Tests

- Rename `test/config.example.js` to `test/config.js` and replace the credentials with your `apiID` and `apiToken`.
- Make sure you have at least one `Call` and one `User` in your account before running the tests.
- Be aware that the tests will create a dummy Contact _(John or Jane Doe)_ in your account. If anything goes wrong in the Contact block, you may have to manually delete this contact.

This is how you run the tests:

```bash
$ npm test
```
