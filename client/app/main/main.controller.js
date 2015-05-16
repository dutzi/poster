'use strict';

angular.module('posterApp').controller('MainCtrl', function (
	$scope,
	$http,
	$q,
	socket,
	facebookService,
	$location,
	appData
) {
	$scope.debugOptions = {};

	$scope.onDebugOptionChange = function (name, value) {
		$scope[name.slice(0, -1)] = appData[name][$scope.debugOptions[name]];
		updateIconSize();
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

	function numWords(str) {
		return str.split(' ').length;
	}

	function emWord(str, index, className) {
		var split = str.split(' ');
		split[index] = '<span class="' + className + '">' + split[index] + '</span>';
		return split.join(' ');
	}

	function animWords(text, knownWordIndex) {
		var deferred = $q.defer();

		var num = numWords(text);
		var timeDelta = 10;
		var maxTimeDelta = Math.min(num * 150 / 14, 200);

		function emRandomWord() {
			var index, newText;

			if (timeDelta < maxTimeDelta) {
				index = Math.floor(Math.random() * num);
				newText = emWord(text, index, 'suspected');

				$('#commentHTML').html(newText);
				setTimeout(emRandomWord, timeDelta);
				timeDelta = timeDelta * 1.07;
			} else {
				if (knownWordIndex > -1) {
					$('#commentHTML').html(emWord(text, knownWordIndex, 'highlighted'));
				} else {
					$('#commentHTML').html(text);
				}

				setTimeout(function () {
					deferred.resolve();
				}, (num > 2)?0:100);
			}
		}

		emRandomWord();

		return deferred.promise;
	}

	function animHalogen(el) {
		var hideInterval = setInterval(function () {
			el.style.display = 'none';
		}, Math.random() * 60 + 40);

		var showInterval = setInterval(function () {
			el.style.display = 'block';
			el.style.transform = 'scale(' + 12 + ')';
		}, Math.random() * 60 + 40);

		setTimeout(function () {
			clearInterval(hideInterval);
			clearInterval(showInterval);
			el.style.transform = 'scale(1)';
			el.style.display = 'block';
		}, 500);
	}

	function animFont() {
		var el = $('#posterCommentText')[0];
		var numFonts = appData.fonts.length;

		var animInterval = setInterval(function () {
			el.style.fontFamily = appData.fonts[
				Math.floor(Math.random() * numFonts)
			].name;
		}, 400);

		var stopAnim = function () {
			clearInterval(animInterval);
			el.style.fontFamily = appData.fonts[0].name;
		};

		setTimeout(stopAnim, 1500);

		return stopAnim;
	}

	function animShadow() {
		var el = $('#posterCommentText')[0];
		var color = appData.bgColors[
			Math.floor(Math.random() * appData.bgColors.length)
		].value;

		var onInterval = setInterval(function () {
			var dist = 50 - Math.floor(Math.random() * 100);
			el.style.textShadow = dist + 'px ' + '0' + 'px ' + color;
		}, 250);

		var offInterval = setInterval(function () {
			el.style.textShadow = '';
		}, 470);

		function stopAnim() {
			clearInterval(onInterval);
			clearInterval(offInterval);
			el.style.textShadow = '';
		}

		setTimeout(stopAnim, 1500);

		return stopAnim;
	}

	$scope.onCommentClick = function (comment) {
		console.log(comment);
		$scope.selectedComment = comment;

		var text = $scope.selectedComment.message;
		var textWords = text.split(/\s/);
		var knownWordIndex = -1;

		var words = text.split(' ');
		for (var i = 0; i < appData.knownWords.length; i++) {
			for (var j = 0; j < words.length; j++) {
				if (words[j].indexOf(appData.knownWords[i]) > -1) {
					knownWordIndex = j;
				}
			}
		}

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

		$scope.icon = null;

		updateDebugOptions();

		var stopFontAnimation = animFont();
		animShadow();

		animWords(text, knownWordIndex).then(function () {

			stopFontAnimation();

			// Choose a random icon type
			//
			$scope.icon = appData.icons[
				Math.floor(Math.random() * appData.icons.length)
			];

			for (var i = 0; i < $scope.layout.data.length; i++) {
				var imageEl = $('#iconImage' + i)[0];
				animHalogen(imageEl);
			}

			updateIconSize();
			updateDebugOptions();

		});
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
