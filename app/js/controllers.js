'use strict';

/* Controllers */

var healthyControllers = angular.module('healthyControllers',  []);

healthyControllers.controller('HomeCtrl', ['$scope', 
  function($scope) {
	$scope.item = "Test Data";
  }]
);
	
healthyControllers.controller('ArticlesCtrl', ['$scope', 'FeedService',  'cacheService',
  function($scope, Feed, cacheService) {
	$scope.loadFeed = function () {         
		var cache = cacheService.get('feed-data');
		if(cache) {
			//console.log('Loading data from cache');
			$scope.feeds = cache;
		} else {
			Feed.parseFeed().then(function (res) {             
				//console.log(JSON.stringify(res.data.responseData.feed.entries));
				cacheService.put('feed-data', res.data.responseData.feed.entries);
				$scope.feeds = res.data.responseData.feed.entries;         
			});     
		}
	}
	//Loading the feed
	$scope.loadFeed();
}]);


//Controller to collect individual article
healthyControllers.controller('ArticleItemCtrl', ['$scope', '$routeParams', 'FeedService', 'cacheService',
  function($scope, $routeParams, Feed, cacheService) {
	$scope.collectArticle = function () {    
		var cache = cacheService.get('feed-data');
		if(cache) {
			//console.log('Loading data from cache');
			$scope.feeds = cache;
			$scope.article = cache[$routeParams.title-1];
		} else {
			Feed.parseFeed().then(function (res) {             
				cacheService.put('feed-data', res.data.responseData.feed.entries);
				cache = res.data.responseData.feed.entries;         
				$scope.article = cache[$routeParams.title-1];
			});     
		}
		//console.log($scope.article);
	}
	//console.log('Route Params : ' + $routeParams.title);	
	//Collecting the particular article
	$scope.collectArticle();
}]);


//Factory for loading the feed
healthyControllers.factory ('FeedService', ['$http', function ($http) {
	return {
		parseFeed: function () {	
			var url = 'http://stayhealthy.careerwrap.com/feed'
			return $http.jsonp('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
		}
	}
}]); 
