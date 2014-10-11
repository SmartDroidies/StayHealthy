
/* Services */
var healhtyServices = angular.module('cacheService', []);

healhtyServices.factory('cacheService', ['$cacheFactory', function ($cacheFactory) {
			return $cacheFactory('healhty-cache');
		}
	]);
