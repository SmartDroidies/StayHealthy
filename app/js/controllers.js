'use strict';

/* Controllers */

var healthyControllers = angular.module('healthyControllers', []);

healthyControllers.controller('HomeCtrl', ['$scope', 
  function($scope) {
	$scope.item = "Test Data";
  }]
);

healthyControllers.controller('ArticlesCtrl', ['$scope', 'FeedService', 
  function($scope, Feed) {
	$scope.loadFeed = function () {         
		Feed.parseFeed().then(function (res) {             
			console.log(JSON.stringify(res.data.responseData.feed.entries));
			$scope.feeds = res.data.responseData.feed.entries;         
		});     
	}
	//Loading the feed
	$scope.loadFeed();
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
