var shopping_basket = require('../shopping_basket');

var assert = require('assert');

var jaffaCakes = { name: "Jaffa Cakes", price: 2.49,};
var milk = { name: "milk", price: 0.69,};
var chicken = { name: "chicken", price: 5.49,};
var eggs = { name: "eggs", price: 10.00,};
var ham = { name: "ham", price: 10.00,};
var egg = { name: "egg", price: 1,};

describe('Shopping Basket', function(){
  //--------------------------------------------------------
  it('should start with basket empty', 
   function(){
      assert.equal(0, shopping_basket.items.length);
   });

  // A shopping basket can have multiple items
  // It should be able to add and remove items
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

  //--------------------------------------------------------
  it('should first item have name', 
  function(){
      shopping_basket.empty();
      shopping_basket.add(egg);
      assert.equal(1, shopping_basket.items.length);
      assert.equal("egg", shopping_basket.items[0].name);
  });

  //--------------------------------------------------------
  it('should first item have price', 
  function(){
      shopping_basket.empty();
      shopping_basket.add(egg);
      assert.equal(1, shopping_basket.items.length);
      assert.equal(1, shopping_basket.items[0].price);
  });

  // We need to find the price of a shopping basket.
  //--------------------------------------------------------
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

  //--------------------------------------------------------
  it('should give 10% discount over £20', 
  function(){
      shopping_basket.empty();
      shopping_basket.add(eggs);
      shopping_basket.add(ham);
      shopping_basket.totalize();
      shopping_basket.discount(20);
      assert.equal(2, shopping_basket.items.length);
      assert.equal(18.00, shopping_basket.total);
  });

  //--------------------------------------------------------
  it('should give 2% discount with loyalty card', 
  function(){
      shopping_basket.empty();
      shopping_basket.add(eggs);
      shopping_basket.totalize();
      shopping_basket.discount(20);
      shopping_basket.loyalty(true);
      assert.equal(1, shopping_basket.items.length);
      assert.equal(9.80, shopping_basket.total);
  });

  //--------------------------------------------------------
  it('should give bogof discount with double items', 
  function(){
      shopping_basket.empty();
      shopping_basket.add(ham);
      shopping_basket.add(ham);
      shopping_basket.totalize();
      assert.equal(2, shopping_basket.items.length);
      assert.equal(10, shopping_basket.total);
  });

  //--------------------------------------------------------
  it('should give bogof discount with double items + 1', 
  function(){
      shopping_basket.empty();
      shopping_basket.add(ham);
      shopping_basket.add(ham);
      shopping_basket.add(ham);
      shopping_basket.totalize();
      assert.equal(3, shopping_basket.items.length);
      assert.equal(20, shopping_basket.total);
  });

  //--------------------------------------------------------
  it('should give 2 x bogof discount with 4 items', 
  function(){
      shopping_basket.empty();
      shopping_basket.add(ham);
      shopping_basket.add(ham);
      shopping_basket.add(ham);
      shopping_basket.add(ham);
      shopping_basket.totalize();
      assert.equal(4, shopping_basket.items.length);
      assert.equal(20, shopping_basket.total);
  });

  //--------------------------------------------------------
  it('should give bogof + discount + loyalty', 
  function(){
      shopping_basket.empty();
      shopping_basket.add(ham);
      shopping_basket.add(ham);
      shopping_basket.add(eggs);
      shopping_basket.add(egg);
      shopping_basket.totalize();
      shopping_basket.discount(20);
      shopping_basket.loyalty(true);
      assert.equal(4, shopping_basket.items.length);
      assert.equal(18.52, shopping_basket.total);
  });

  it('should have total with dicounts in sum', 
  function(){
      shopping_basket.empty();
      shopping_basket.add(jaffaCakes);
      shopping_basket.add(milk);
      shopping_basket.add(chicken);
      shopping_basket.add(eggs);
      shopping_basket.add(ham);
      shopping_basket.sum(true,20);
      assert.equal(5, shopping_basket.items.length);
      assert.equal(25.28, shopping_basket.total);
  });

  it('should give 2 x bogof discount with items not in order', 
  function(){
      shopping_basket.empty();
      shopping_basket.add(eggs);
      shopping_basket.add(ham);
      shopping_basket.add(eggs);
      shopping_basket.add(ham);
      shopping_basket.totalize();
      assert.equal(4, shopping_basket.items.length);
      assert.equal(20, shopping_basket.total);
  });
});

