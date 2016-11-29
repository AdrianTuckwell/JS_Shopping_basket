var shopping_basket = {
  items: [],
  total: 0,
  add: function( item ) { this.items.push( item );},
  remove: function() { this.items.pop();},
  empty: function() { this.items = [];},
  totalize: function() 
  { 
    this.total = 0;
    for (var item of this.items)
    {
      this.total += item.price;
    }
  }


  };

module.exports = shopping_basket;



// { name: 'Milk',
//   price: 0.69
// },
// { name: 'chicken',
//   price: 5.49
// },
// { name: 'eggs',
//   price: 10.00
// },],