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
	function dedupeFBPosts(posts, key) {
		for (var i = 0; i < posts.length; i++) {
			var a = posts[i][key];
			for (var j = i + 1; j < posts.length; j++) {
				var b = posts[j][key];
				if (a === b) {
					posts.splice(j, 1);
					j--;
				}
			}
		}
		return posts;
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
					response.data = dedupeFBPosts(response.data, 'id');
					deferred.resolve(response);
					nextFeedPosts = response.paging.next;
				});
			});
			return deferred.promise;
		},

		// This will return a list of people who liked a post
		getLikes: function (postId) {

		}
	};
});
