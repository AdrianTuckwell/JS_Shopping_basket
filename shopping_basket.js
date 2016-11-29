var shopping_basket = {
  //basket: [{ name: 'Jaffa Cakes', price: 2.49}],
  items: [],
  total: 0,
  totalize: function(price) { return this.total += price; },
  add: function( item ) { this.items.push( item );}


  };

    // total = 0;
    // for (var key in this.basket)
    //   {
    //     total += this.basket[key].price;
    //   }
    // return total;
    // }





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