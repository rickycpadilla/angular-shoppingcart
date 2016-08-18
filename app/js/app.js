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
- Add to cart X
- tweaks: X
  - currency X
  - in stock X

CART
- Add item to cart w/ right quantity X
- Update cart button X
- have items display in cart X
- subtotal display X
- quantity display X
- edit quantity
- remove item
- total display X


*/
