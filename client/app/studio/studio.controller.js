'use strict';

angular.module('posterApp').controller('StudioCtrl', function (
	$scope,
	$http,
	$q,
	$timeout,
	socket,
	facebookService,
	$location,
	appData,
	Poster
) {
	var POSTER_WIDTH = 1020; // A3
	    // POSTER_WIDTH = 646.21; // A4

	$scope.debugOptions = {};

	$scope.onDebugOptionChange = function (name, value) {
		$scope[name.slice(0, -1)] = appData[name][$scope.debugOptions[name]];
	};

	function updateDebugOptions() {
		for (var name in appData) {
			$scope.debugOptions[name] = appData[name].indexOf(
				$scope[name.slice(0, -1)]
			);
		}
	}

	facebookService.init().then(function (res) {
	}, function (err) {
		$location.path('/login');
	});

	$scope.appData = appData;

	$scope.proximity = facebookService.proximity;

	facebookService.calculateProximity(0).then(function () {
		console.log('Done calculating proximity for iteration = 1');
	});

	$scope.posts = [];

	$scope.loadMore = function () {

		$scope.isLoadingPosts = true;

		facebookService.getFeed().then(function (res) {

			console.log(res);

			var data = res.data.map(function (item) {
				item.message = item.message && item.message.replace(/\n/g, '<br/>');
				return item;
			});
			$scope.posts = $scope.posts.concat(data);
			$scope.isLoadingPosts = false;

			$scope.onCommentClick($scope.posts[3].comments.data[0]);

			// Select the first comment on the first post that has any comments
			//
			// if (!$scope.selectedComment) {
			// 	for (var i = 0; i < $scope.posts.length; i++) {
			// 		if ($scope.posts[i].comments) {
			// 			$scope.onCommentClick($scope.posts[i].comments.data[1]);
			// 			break;
			// 		}
			// 	}
			// }
		});
	};

	facebookService.reset();
	$scope.loadMore();

	$scope.shakeMe = function (post) {
		post.isShaking = true;
		$timeout(function () {
			post.isShaking = false;
		}, 300);
	};

	$scope.onCommentClick = function (comment) {
		console.log(comment);
		$scope.selectedComment = comment;

		// Choose a font
		//
		$scope.font = appData.fonts[0];

		// Choose a random layout
		//
		$scope.layout = appData.layouts[
			Math.floor(Math.random() * appData.layouts.length)
		];

		// Choose random color
		//
		$scope.bgColor = appData.bgColors[
			Math.floor(Math.random() * appData.bgColors.length)
		];

		// Choose random color if background is white, otherwise set text color
		// to white.
		//
		if ($scope.bgColor.value === '#ffffff' || $scope.bgColor.value === '#333333') {
			$scope.textColor = appData.textColors[
				Math.floor(Math.random() * (appData.textColors.length - 1) + 1)
			];
		} else {
			$scope.textColor = appData.textColors[0];
		}

		// $scope.icon = null;
		$scope.icon = appData.icons[
			Math.floor(Math.random() * appData.icons.length)
		];

		updateDebugOptions();
	};

	/*******************************/
	/*********** Gallery ***********/
	/*******************************/

	function preparePoster(poster) {
		poster.font      = _.find(appData.fonts,      { id: poster.font });
		poster.layout    = _.find(appData.layouts,    { id: poster.layout });
		poster.bgColor   = _.find(appData.bgColors,   { id: poster.bgColor });
		poster.textColor = _.find(appData.textColors, { id: poster.textColor });
		poster.icon      = _.find(appData.icons,      { id: poster.icon });
	}

	Poster.query(function (data) {
		$scope.gallery = {
			posters: data.reverse()
		};

		for (var i = 0; i < data.length; i++) {
			preparePoster(data[i]);
		}
	});

	$scope.onSave = function () {

		var poster = new Poster({
			comment   : $scope.selectedComment,
			font      : $scope.font.id,
			layout    : $scope.layout.id,
			bgColor   : $scope.bgColor.id,
			textColor : $scope.textColor.id,
			icon      : $scope.icon.id
		});
		poster.$save();

		$scope.gallery.posters.unshift({
			comment   : $scope.selectedComment,
			font      : $scope.font,
			layout    : $scope.layout,
			bgColor   : $scope.bgColor,
			textColor : $scope.textColor,
			icon      : $scope.icon,
			poster    : poster
		});
	};

	$scope.deletePoster = function (poster) {
		// If the poster was added in this session, the reference to the
		// poster's resource is in the Poster object's poster attribute.
		//
		if (poster.poster) {
			poster.poster.$delete();
		} else {
			poster.$delete();
		}

		$scope.gallery.posters.splice($scope.gallery.posters.indexOf(poster), 1);
	};

	// function updatePrintScale(width) {
	// 	var styleSheets = document.styleSheets,
	// 	    printScale = POSTER_WIDTH / width,
	// 	    rule;

	// 	for (var i = 0; i < styleSheets.length; i++) {
	// 		var styleSheet = styleSheets[i];
	// 		if (styleSheet.ownerNode &&
	// 			styleSheet.ownerNode.parentNode &&
	// 			styleSheet.ownerNode.parentNode.id === 'printStyleContainer') {

	// 			rule = styleSheet.cssRules[0].cssRules[0];
	// 		}
	// 	}

	// 	if (rule) {
	// 		rule.style.cssText = 'transform: scale(' + printScale + ');';
	// 		console.log('Setting printScale to ', printScale);
	// 	}

	// }

	// Not the prettiest thing, but will do for now.
	//
	window.onresize = function () {
		var maxWidth = $('#mainPoster').parent().width(),
			maxHeight = window.innerHeight - 100,
			// A_SERIES_ASPECT = 1.414141414141;
			A_SERIES_ASPECT = 297/210;

		var width = (maxWidth * A_SERIES_ASPECT > maxHeight)
			? maxHeight / A_SERIES_ASPECT
			: maxWidth;

		var height = width * A_SERIES_ASPECT;
		$scope.posterMargin = maxWidth / 2 - width / 2;
		$scope.posterWidth = width;
		$scope.posterHeight = height;

		$('#gallery').height(window.innerHeight - 70);

		$scope.$digest();
	};

	// For some reason I need to call this after a while (1 sec or more),
	// otherwise the scaling for printing gets screwed up...
	//
	setTimeout(window.onresize, 100);
	setTimeout(window.onresize, 1000);

});
