app.controller("ResultsController", function($scope, $route, $http, $window){
  $scope.data = data;
})

app.controller('ShowController', function($scope, $http, $routeParams){
  var movieID = $routeParams.id;
  $scope.movieInfo = {};
  $http.get('http://www.omdbapi.com/?i=' + movieID + '&plot=short&r=json').then(function(data){
    $scope.movieInfo.info = data.data
  });
});
