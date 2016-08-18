app.controller("ResultsController",
  function($scope, $rootScope, $window, $route, CatService, SearchService, AddToCartService){
    $scope.data = data;
    $scope.category = CatService.category;
    $scope.searchTerm = SearchService.search;
    $scope.add = function(item, quantity){
      if(quantity == undefined){
        quantity = 1
      };
      AddToCartService.addToCart(item, quantity);
      $rootScope.$broadcast('update');
    };
    // console.log("$scope.searchTerm = " + $scope.searchTerm);
    // console.log("$scope.category=  " + $scope.category);
})

app.controller('CartController', function($scope, $rootScope, AddToCartService){
  $scope.data = AddToCartService.cartItems;
  $scope.total = 0;
  for (var i = 0; i < $scope.data.length; i++) {
    var sub = $scope.data[i].quantity * $scope.data[i].price;
    $scope.total += sub;
  };
  $scope.remove = function(i){
    AddToCartService.removeFromCart(i);
    $rootScope.$broadcast('update');
  }
});

app.controller("NavController",
  function($scope, $rootScope, $location, $route, CatService, SearchService, AddToCartService){
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
    };
    $scope.totalQ = AddToCartService.cartItems.length;
    $rootScope.$on('update', function (event) {
      console.log("updating");
     $scope.totalQ = AddToCartService.cartItems.length;
   });
})
