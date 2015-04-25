'use strict';

angular.module('posterApp').service('facebookService', function ($q) {

	var fbLoaded = $q.defer(),
		oldFBAsyncInit = window.fbAsyncInit;

	window.fbAsyncInit = function() {
		oldFBAsyncInit();
		FB.getLoginStatus(function (res) {
			if (res.status === 'connected') {
				fbLoaded.resolve();
			} else {
				alert('Error: FB auth error');
			}
		});
	};

	// Facebook sometime returns duplicates for '/me/feed', this removes them.
	//
	function dedupe(array, key) {
		for (var i = 0; i < array.length; i++) {
			var a = array[i][key];
			for (var j = i + 1; j < array.length; j++) {
				var b = array[j][key];
				if (a === b) {
					array.splice(j, 1);
					j--;
				}
			}
		}
		return array;
	}

	var nextFeedPosts;

	return {
		reset: function () {
			nextFeedPosts = null;
		},

		getFeed: function () {
			var deferred = $q.defer();
			fbLoaded.promise.then(function () {
				FB.api(nextFeedPosts || '/me/feed', function (response) {
					response.data = dedupe(response.data, 'id');
					deferred.resolve(response);
					nextFeedPosts = response.paging.next;
				});
			});
			return deferred.promise;
		}
	};
});
