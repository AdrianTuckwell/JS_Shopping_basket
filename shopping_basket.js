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
  },
  discount: function(){
    if (this.total >= 20)
    {
      this.total = (this.total/100.0)*90.0;
    } 
  },
  loyalty: function(card){
    if (card)
    {
      this.total = (this.total/100.0)*98.0;
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