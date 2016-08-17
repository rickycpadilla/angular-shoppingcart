app.controller("ResultsController", function($scope, $window, CatService){
  $scope.data = data;
  $scope.category = CatService.category;
  console.log("$scope.category=  " + $scope.category);
})

app.controller('ShowController', function($scope, $http, $routeParams){
  var movieID = $routeParams.id;
  $scope.movieInfo = {};
  $http.get('http://www.omdbapi.com/?i=' + movieID + '&plot=short&r=json').then(function(data){
    $scope.movieInfo.info = data.data
  });
});

app.controller("NavController", function($scope, $window, $route, CatService){
  // $scope.data = data;
  $scope.categorySorter = "";
  $scope.changeCategory = function(category){
    CatService.catSort(category);
    $route.reload()
  };
  $scope.categories = [];
  for (var i = 0; i < data.length; i++) {
    // console.log(data[i].categories);
    for (var j = 0; j < data[i].categories.length; j++) {
      if($scope.categories.indexOf(data[i].categories[j]) < 0){
        $scope.categories.push(data[i].categories[j])
    }
    }
  };
  // console.log($scope.categories);
})
