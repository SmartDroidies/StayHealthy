'use strict';

/* Filters */

var healhtyFilters = angular.module('healhtyFilters',  []);

healhtyFilters.filter('todate', function($filter) {
	return function(input) {
		var _date = $filter('date')(new Date(input), 'MMM dd - HH:MM');
		return _date; 
	};
});

healhtyFilters.filter('feedicon', function($filter) {
	return function(input) {
		var start = "src=\"";
		var end = "\"";
		var temp = input.substring(input.indexOf(start)+5);
		var imageSrc = temp.substring(0,temp.indexOf(end));
		return '<img class="feed-icon" src=' +  imageSrc + '>' ; 
	};
});