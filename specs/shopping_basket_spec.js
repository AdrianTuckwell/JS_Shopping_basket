var shopping_basket = require('../shopping_basket');

var assert = require('assert');

// var shopping = require("../item");
// var jaffaCakes = shopping.jaffaCakes;
// var milk = shopping.milk;
// var chicken = shopping.chicken;
// var eggs = shopping.eggs;


var jaffaCakes = { name: "Jaffa Cakes", price: 2.49,};
var milk = { name: "milk", price: 0.69,};
var chicken = { name: "chicken", price: 5.49,};
var eggs = { name: "eggs", price: 10.00,};
var egg = { name: "egg", price: 1,};


describe('Shopping Basket', function(){
  //--------------------------------------------------------
  it('should start with basket empty', 
   function(){
      assert.equal(0, shopping_basket.items.length);
   });

  //--------------------------------------------------------
  it('should add item to basket', 
   function(){
      shopping_basket.empty();
      shopping_basket.add(jaffaCakes);
      shopping_basket.add(milk);
      shopping_basket.add(chicken);
      shopping_basket.add(eggs);
      assert.equal(4, shopping_basket.items.length);
   });

  //--------------------------------------------------------
  it('should empty basket', 
   function(){
      shopping_basket.empty();
      shopping_basket.add(jaffaCakes);
      assert.equal(1, shopping_basket.items.length);
      shopping_basket.empty();
      assert.equal(0, shopping_basket.items.length);
   });

  //--------------------------------------------------------
  it('should remove item from basket', 
   function(){
      shopping_basket.empty();
      shopping_basket.add(jaffaCakes);
      shopping_basket.add(milk);
      shopping_basket.remove();
      assert.equal(1, shopping_basket.items.length);
   });


  it('should first item have name', 
  function(){
      shopping_basket.empty();
      shopping_basket.add(egg);
      assert.equal(1, shopping_basket.items.length);
      assert.equal("egg", shopping_basket.items[0].name);
  });

  it('should first item have price', 
  function(){
      shopping_basket.empty();
      shopping_basket.add(egg);
      assert.equal(1, shopping_basket.items.length);
      assert.equal(1, shopping_basket.items[0].price);
  });





  it('should have total', 
  function(){
      shopping_basket.empty();
      shopping_basket.add(jaffaCakes);
      shopping_basket.add(milk);
      shopping_basket.add(chicken);
      shopping_basket.add(eggs);
      shopping_basket.totalize();
      assert.equal(4, shopping_basket.items.length);
      assert.equal(18.67, shopping_basket.total);
  });

});




 


        // basket.addItem(item1);
        // assertEquals(1, basket.countItems());
  



// We need to find the price of a shopping basket.
// A shopping basket can have multiple items
// It should be able to add and remove items
