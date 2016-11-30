var item = require('../item');
var assert = require('assert');

// Item should have name
describe('Item', function(){
 it('should have name', 
  function(){
    assert.equal("Jaffa Cakes", item.name);
  });

 it('should have price', 
  function(){
    assert.equal(2.49, item.price);
  });
});


