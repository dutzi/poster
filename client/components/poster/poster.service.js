'use strict';

angular.module('posterApp').factory('Poster', function ($resource) {
	return $resource('/api/posters/:id', {
		id: '@_id'
	});
	// {
	// 	changePassword: {
	// 		method: 'PUT',
	// 		params: {
	// 			controller:'password'
	// 		}
	// 	},
	// 	get: {
	// 		method: 'GET',
	// 		params: {
	// 			id: 'me'
	// 		}
	// 	}
	// });
});
