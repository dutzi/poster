'use strict';

angular.module('posterApp').service('facebookService', function ($q) {

	var fbLoaded = $q.defer(),
		oldFBAsyncInit = window.fbAsyncInit,
		absProximity = {},
		proximity = {};

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

	function calculateProximity(iteration, nextFeedPosts) {
		var deferred = $q.defer();

		function onResponse(data) {
			data.forEach(function (post) {
				if (post.likes) {
					post.likes.data.forEach(function (like) {
						var id = like.id;
						absProximity[id] = absProximity[id] + 1 || 1;
					});
				}

				if (post.comments) {
					post.comments.data.forEach(function (comment) {
						var id = comment.from.id;
						absProximity[id] = absProximity[id] + 1 || 1;
					});
				}
			});

			var maxProximity = -Infinity,
			    minProximity = Infinity,
			    id,
			    delta;

			for (id in absProximity) {
				if (absProximity[id] > maxProximity) {
					maxProximity = absProximity[id];
				}

				if (absProximity[id] < minProximity) {
					minProximity = absProximity[id];
				}
			}

			proximity = {};
			delta = maxProximity - minProximity;

			for (id in absProximity) {
				var value = absProximity[id];
				proximity[id] = (value - minProximity) / (delta);
			}
		}

		fbLoaded.promise.then(function () {
			FB.api(nextFeedPosts || '/me/feed', function (response) {
				response.data = dedupeFBPosts(response.data, 'id');

				onResponse(response.data);

				if (iteration === 0) {
					deferred.resolve(proximity);
				} else {
					calculateProximity(
						iteration - 1,
						response.paging.next
					).then(function () {
						deferred.resolve(proximity);
					});
				}
			});
		});
		return deferred.promise;
	}

	var nextFeedPosts;

	return {
		reset: function () {
			nextFeedPosts = null;
		},

		calculateProximity: calculateProximity,

		proximity: function (id) {
			return proximity[id];
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
