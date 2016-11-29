var customer = require('../customer');
var assert = require('assert');

// Item should have name
describe('Customer', function(){
 it('should have name', 
  function(){
    assert.equal("Bobby", customer.name);
  });
});

// Item should have price
describe('Customer', function(){
 it('should have card', 
  function(){
    assert.equal(true, customer.card);
  });
});