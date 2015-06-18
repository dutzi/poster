'use strict';

angular.module('posterApp').service('facebookService', function ($q) {
	var POST_FIELDS = [
		'id',
		'caption',
		'created_time',
		'description',
		'from',
		'link',
		'message',
		'message_tags',
		'name',
		'object_id',
		'picture',
		'full_picture',
		'place',
		'properties',
		'shares',
		'source',
		'status_type',
		'story',
		'story_tags',
		'to',
		'type',
		'updated_time',
		'comments'
	].join(',');

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
				fbLoaded.reject();
				// alert('Error: FB auth error');
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
		init: function () {
			return fbLoaded.promise;
		},

		reset: function () {
			nextFeedPosts = null;
		},

		calculateProximity: calculateProximity,

		proximity: function (id) {
			return proximity[id];
		},

		getFeed: function () {
			var deferred = $q.defer();
			var request = nextFeedPosts || '/me/feed?fields=' + POST_FIELDS;
			fbLoaded.promise.then(function () {
				FB.api(request, function (response) {
					response.data = dedupeFBPosts(response.data, 'id');

					deferred.resolve(response);
					nextFeedPosts = response.paging.next;
				});
			});
			return deferred.promise;
		},

		share: function (posterId) {
			console.log('Sharing URL: http://comment-poster.herokuapp.com/poster/' + posterId);
			FB.ui({
				method: 'share',
				href: 'http://www.poster.re/poster/' + posterId,
			}, function(response){

			});
		},

		getUserData: function () {
			var deferred = $q.defer();
			fbLoaded.promise.then(function () {
				FB.api('/me', deferred.resolve);
			});
			return deferred.promise;
		},

		// This will return a list of people who liked a post
		getLikes: function (postId) {

		}
	};
});
