'use strict';

angular.module('posterApp').controller('MainCtrl', function (
	$scope,
	$http,
	socket,
	facebookService,
	appData
) {
	$scope.debugOptions = {};
	$scope.$watch('debugOptions', function () {
		// debugger;
	}, true);

	$scope.onDebugOptionChange = function (name, value) {
		$scope[name.slice(0, -1)] = appData[name][$scope.debugOptions[name]];
		updateIconSize();
	};

	function updateDebugOptions() {
		for (var name in appData) {
			if (name === 'knownWords') { continue; }
			$scope.debugOptions[name] = appData[name].indexOf(
				$scope[name.slice(0, -1)]
			);
		}
	}

	$scope.appData = appData;

	$scope.fontFamily = 'Mandatory-29';

	$scope.$watch('fontFamily', function () {

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

			$scope.onCommentClick($scope.posts[2].comments.data[0]);

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

	function updateIconSize() {
		if (!$scope.icon) { return; }

		var width = $scope.posterWidth * $scope.icon.ratio;
		$scope.iconCSS = {
			'width': width,
			'height': width / $scope.icon.width * $scope.icon.height,
			'margin-right': -width / 2,
			'margin-top': -width / $scope.icon.width * $scope.icon.height / 2
		};
	}

	$scope.onCommentClick = function (comment) {
		console.log(comment);
		$scope.selectedComment = comment;

		var text = $scope.selectedComment.message;
		var textWords = text.split(/\s/);

		// debugger;
		for (var i = 0; i < appData.knownWords.length; i++) {
			var index = text.indexOf(appData.knownWords[i]);
			if (index > -1) {
				text = text.substr(0, index) + '<span class="highlighted">' +
					appData.knownWords[i] +
					'</span>' + text.substr(index + appData.knownWords[i].length);
				break;
			}
		}

		$scope.commentHTML = text;

		// Choose a random icon type
		//
		$scope.icon = appData.icons[
			Math.floor(Math.random() * appData.icons.length)
		];

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

		updateIconSize();
		updateDebugOptions();
	};

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
