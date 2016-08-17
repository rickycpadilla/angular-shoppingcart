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
- Sort by price
- Add to cart
- tweaks:
  - currency
  - in stock

CART
-
*/
