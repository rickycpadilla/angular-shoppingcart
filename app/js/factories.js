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
