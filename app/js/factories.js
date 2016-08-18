app.factory('CatService', function () {
  return {
    category: "",
    catSort: function (category) {
      // console.log(category);
      this.category = category;
    }
  }
});

app.factory('SearchService', function () {
  return {
    search: "",
    searchBy: function (term) {
      console.log(term);
      this.search = term.search;
    }
  }
});

app.factory('AddToCartService', function(){
  return {
    cartItems: [],
    addToCart: function(item, quantity){
      item.quantity = quantity;
      this.cartItems.push(item);
      console.log(this.cartItems);
    }
  }
})
