'use strict';

angular.module('posterApp').controller('MainCtrl', function (
	$scope,
	$http,
	socket,
	facebookService
) {
	$scope.awesomeThings = [];

	$http.get('/api/things').success(function(awesomeThings) {
		$scope.awesomeThings = awesomeThings;
		socket.syncUpdates('thing', $scope.awesomeThings);
	});

	$scope.addThing = function() {
		if($scope.newThing === '') {
			return;
		}
		$http.post('/api/things', { name: $scope.newThing });
		$scope.newThing = '';
	};

	$scope.deleteThing = function(thing) {
		$http.delete('/api/things/' + thing._id);
	};

	$scope.$on('$destroy', function () {
		socket.unsyncUpdates('thing');
	});

	$scope.posts = [];

	function gotFBPosts(res) {
		console.log(res);
		var data = res.data.map(function (item) {
			item.message = item.message && item.message.replace(/\n/g, '<br/>');
			return item;
		});
		$scope.posts = $scope.posts.concat(data);
		$scope.isLoadingPosts = false;
	}

	$scope.loadMore = function () {
		$scope.isLoadingPosts = true;
		facebookService.getFeed().then(gotFBPosts);
	};

	facebookService.reset();
	$scope.loadMore();

	// FB.api('/me/feed', function (response) {
	//     $scope.posts = response;
	//     debugger;
	// });
	// $scope.posts = [
	//     {
	//         message: 'hey'
	//     }
	// ];
  });
