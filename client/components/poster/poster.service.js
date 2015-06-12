'use strict';

angular.module('posterApp').factory('Poster', function ($resource) {
	return $resource('/api/posters/:id', {
		id: '@_id'
	});
});
