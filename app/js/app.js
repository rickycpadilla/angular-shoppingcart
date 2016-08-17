var app = angular.module("teaApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/results.html',
        controller: 'ResultsController'
      })
      .when('/cart', {
        templateUrl: 'partials/cart.html',
        controller: 'CartController'
      })
});

/*

HOME
- Search by category X
- Search by name X
- Sort by price X
- Add to cart
- tweaks: X
  - currency X
  - in stock X

CART
-
*/
