'use strict';
/* App Module */
var healthyApp = angular.module('healthyApp', ['ngRoute','ngSanitize','healthyControllers','cacheService']);

healthyApp.config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider.
			when('/home', {
				templateUrl : 'partials/home.html',
				controller : 'HomeCtrl'
			}).
			when('/articles', {
				templateUrl : 'partials/articles.html',
				controller : 'ArticlesCtrl'
			}).
			when('/article/:title', {
				templateUrl: 'partials/acticle.html',
				controller: 'ArticleItemCtrl'
			}).
			when('/aboutus', {
				templateUrl : 'partials/aboutus.html'
			}).
			when('/contactus', {
				templateUrl : 'partials/contactus.html'
			}).
			otherwise({
				redirectTo : '/home'
			});
		}
	]);
