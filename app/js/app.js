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
      when('/aboutus', {
        templateUrl: 'partials/aboutus.html'
      }).
      when('/contactus', {
        templateUrl: 'partials/contactus.html'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
