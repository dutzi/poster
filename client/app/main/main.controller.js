'use strict';

angular.module('posterApp').controller('MainCtrl', function (
	$scope,
	$http,
	socket,
	facebookService
) {
	// $scope.awesomeThings = [];

	// $http.get('/api/things').success(function(awesomeThings) {
	// 	$scope.awesomeThings = awesomeThings;
	// 	socket.syncUpdates('thing', $scope.awesomeThings);
	// });

	// $scope.addThing = function() {
	// 	if($scope.newThing === '') {
	// 		return;
	// 	}
	// 	$http.post('/api/things', { name: $scope.newThing });
	// 	$scope.newThing = '';
	// };

	// $scope.deleteThing = function(thing) {
	// 	$http.delete('/api/things/' + thing._id);
	// };

	// $scope.$on('$destroy', function () {
	// 	socket.unsyncUpdates('thing');
	// });

	$scope.posts = [];

	function gotFBPosts(res) {
		console.log(res);
		var data = res.data.map(function (item) {
			item.message = item.message && item.message.replace(/\n/g, '<br/>');
			return item;
		});
		$scope.posts = $scope.posts.concat(data);
		$scope.isLoadingPosts = false;

		// if (!$scope.selectedComment) {
		// 	for (var i = 0; i < $scope.posts.length; i++) {
		// 		if ($scope.posts[i].comments) {
		// 			$scope.onCommentClick($scope.posts[i].comments.data[1]);
		// 			break;
		// 		}
		// 	}
		// }
	}

	$scope.loadMore = function () {
		$scope.isLoadingPosts = true;
		facebookService.getFeed().then(gotFBPosts);
	};

	facebookService.reset();
	$scope.loadMore();

	function updateIconSize() {
		if (!$scope.iconType) { return; }

		var width = $scope.posterWidth * $scope.iconType.ratio;
		$scope.iconCSS = {
			'width': width,
			'height': width / $scope.iconType.width * $scope.iconType.height,
			'margin-right': -width / 2,
			'margin-top': -width / $scope.iconType.width * $scope.iconType.height / 2
		};
	}

	$scope.onCommentClick = function (comment) {
		console.log(comment);
		$scope.selectedComment = comment;

		// Choose a random icon type
		//
		$scope.iconType = icons[
			Math.floor(Math.random() * icons.length)
			// 3
		];

		// Choose a random layout
		//
		$scope.layout = layouts[
			Math.floor(Math.random() * layouts.length)
		].layout;

		updateIconSize();
	};

	var icons = [
		{
			label: 'Pink hands',
			className: 'icon-pink-hands',
			ratio: 0.3,
			width: 800,
			height: 1448,
			image: 'ok.png',
			bgColor: '#8CC63E'
		},
		{
			label: 'Blue hands',
			className: 'icon-blue-hands',
			ratio: 0.5,
			width: 920,
			height: 1156,
			image: 'pray.png',
			bgColor: '#F8ED31'
		},
		{
			label: 'Heart',
			className: 'icon-heart',
			ratio: 0.3,
			width: 425,
			height: 785,
			image: 'heart.png',
			bgColor: '#F8DB89'
		},
		{
			label: 'Kaki',
			className: 'icon-kaki',
			ratio: 0.5,
			width: 1137,
			height: 1115,
			image: 'kaki.png',
			bgColor: '#C39A6B'
		}
	];

	var layouts = [
		{
			layout: [
				{ x: -0.01, y: -0.05 },
				{ x: 0.70, y: 0.50 },
				{ x: 0.30, y: 1.05 }
			]
		},
		{
			layout: [
				{ x: 0.49, y: -0.04 },
				{ x: 0.32, y: 0.50 },
				{ x: 0.70, y: 1.03 }
			]
		}
	];

	// Not the prettiest thing, but will do for now.
	//
	window.onresize = function () {
		var maxWidth = $('.poster-container').parent().width(),
			maxHeight = window.innerHeight - 90,
			A3_ASPECT = 1.414141414141;

		var width = (maxWidth * A3_ASPECT > maxHeight)
			? maxHeight / A3_ASPECT
			: maxWidth;

		var height = width * A3_ASPECT;

		$scope.posterWidth = width;

		$('.poster-container').css({
			width: width,
			height: height,
			marginRight: (maxWidth - width) / 2
		});

		$('.poster-comment-valign').css({
			width: width,
			height: height
		});

		updateIconSize();

		$scope.$digest();
	};

	setTimeout(window.onresize, 100);
});
