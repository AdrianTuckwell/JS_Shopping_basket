var shopping_basket = require('../shopping_basket');

var assert = require('assert');

var shopping = require("../item");
var jaffaCakes = shopping.jaffaCakes;
var milk = shopping.milk;
var chicken = shopping.chicken;
var eggs = shopping.eggs;


describe('Shopping Basket', function(){
  //--------------------------------------------------------
  it('should start with basket empty', 
   function(){
      assert.equal(0, shopping_basket.items.length);
   });

  //--------------------------------------------------------
  it('should add item to basket', 
   function(){
      shopping_basket.add(jaffaCakes);
      shopping_basket.add(milk);
      shopping_basket.add(chicken);
      shopping_basket.add(eggs);
      assert.equal(4, shopping_basket.items.length);
   });




  it('should have total', 
  function(){
      shopping_basket.totalize(2.49);
      assert.equal(2.49, shopping_basket.total);
  });

});




 


        // basket.addItem(item1);
        // assertEquals(1, basket.countItems());
  



// We need to find the price of a shopping basket.
// A shopping basket can have multiple items
// It should be able to add and remove items
