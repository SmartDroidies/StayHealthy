'use strict';
/* App Module */
var healthyApp = angular.module('healthyApp', [
  'ngRoute',
  'healthyControllers'
]);


healthyApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/articles', {
        templateUrl: 'partials/articles.html',
        controller: 'ArticlesCtrl'
      }).
      when('/category/:category', {
        templateUrl: 'partials/category-items.html',
        controller: 'CtgryItemsCtrl'
      }).
      when('/item/:category/:id', {
        templateUrl: 'partials/item.html',
        controller: 'ItemDetailCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
