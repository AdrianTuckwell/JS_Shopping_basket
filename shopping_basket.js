var shopping_basket = {
  items: [], // array to hold shopping basket items
  total: 0, // running total
  add: function( item ) { this.items.push( item );}, // add item to basket
  remove: function() { this.items.pop();}, // remove last item in basket
  empty: function() { this.items = [];}, // empty shopping basket
  totalize: function() // provide a total price of items in basket + bogof
  { 
    this.total = 0;
    var bogof = ""; // include bogof functionality
    for (var item of this.items)
    {
      if (bogof === item.name){
        bogof = "";
      } else {
        bogof = item.name;
        this.total += item.price;
      }
    }
  }, //---------------------------------------------------
  discount: function() // provide discount if itme > £20
  {
    if (this.total >= 20)
    {
      this.total = ((this.total/100.0)*90.0).toFixed(2);
    } 
  }, //---------------------------------------------------
  loyalty: function(card){
    if (card)
    {
      this.total = ((this.total/100.0)*98.0).toFixed(2);
    } 
  }, //---------------------------------------------------
  sum: function(card){
    this.totalize();
    this.discount();
    this.loyalty(card);
  } //---------------------------------------------------
};

module.exports = shopping_basket;
