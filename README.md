# Aircall

An [Aircall](aircall.io) API for node.

## Installation

  $ npm install aircall

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
aircall.user.get(12345, function(err, res){
  console.log(res.user)
})
```

## API

___Coming soon___
