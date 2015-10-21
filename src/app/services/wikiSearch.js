(function(){

	'use strict';

	angular.module('wikiSearch',[])
		.factory('getWiki', ['$http', function($http){
			return function(searchTerm){
				return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='+ searchTerm +'&utf8&format=json&callback=JSON_CALLBACK');
			};
		}]);

})();


// https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Albert%20Einstein&utf8