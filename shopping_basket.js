var shopping_basket = {
  items: [],
  total: 0,
  add: function( item ) { this.items.push( item );},
  remove: function() { this.items.pop();},
  empty: function() { this.items = [];},
  totalize: function() 
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
  },
  discount: function(){
    if (this.total >= 20)
    {
      this.total = ((this.total/100.0)*90.0).toFixed(2);
    } 
  },
  loyalty: function(card){
    if (card)
    {
      this.total = ((this.total/100.0)*98.0).toFixed(2);

    } 
  },
  sum: function(card){
    this.totalize();
    this.discount();
    this.loyalty(card);
  }




};

module.exports = shopping_basket;
