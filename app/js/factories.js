app.factory('CatService', function () {
  return {
    category: "",
    catSort: function (category) {
      console.log(category);
      this.category = category;
    }
  }
})
