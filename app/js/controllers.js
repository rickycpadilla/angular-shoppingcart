app.controller("ResultsController",
  function($scope, $window, CatService, SearchService, AddToCartService){
    $scope.data = data;
    $scope.category = CatService.category;
    $scope.searchTerm = SearchService.search;
    $scope.form = {};
    $scope.add = function(item, quantity){
      AddToCartService.addToCart(item, quantity)
    };
    // console.log("$scope.searchTerm = " + $scope.searchTerm);
    // console.log("$scope.category=  " + $scope.category);
})

app.controller('CartController', function($scope, AddToCartService){
  $scope.data = AddToCartService.cartItems;
  $scope.total = 0;
  for (var i = 0; i < $scope.data.length; i++) {
    var sub = $scope.data[i].quantity * $scope.data[i].price;
    $scope.total += sub;
  }
});

app.controller("NavController", function($scope, $location, $route, CatService, SearchService){
  $scope.categorySorter = "";
  $scope.changeCategory = function(category){
    CatService.catSort(category);
    SearchService.searchBy("")
    $route.reload();
    $location.path('/');
  };
  $scope.categories = [];
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].categories.length; j++) {
      if($scope.categories.indexOf(data[i].categories[j]) < 0){
        $scope.categories.push(data[i].categories[j])
    }
    }
  };
  $scope.form = {};
  $scope.submit = function(input){
    console.log("input = " + input);
    SearchService.searchBy(input);
    CatService.catSort("")
    $route.reload();
    $location.path('/');
  }
})
