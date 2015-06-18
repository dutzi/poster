'use strict';

angular.module('posterApp').controller('StudioCtrl', function (
	$scope,
	$http,
	$q,
	$timeout,
	socket,
	facebookService,
	$location,
	$window,
	appData,
	Poster,
	md5
) {
	var POSTER_WIDTH = 1020; // A3
	    // POSTER_WIDTH = 646.21; // A4

	$scope.debugOptions = {};
	$scope.firstLoad = true;
	var userData;

	$scope.onDebugOptionChange = function (name, index) {
		$scope[name.slice(0, -1)] = appData[name][index];
		$scope.debugOptions[name] = index;
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
		$window.location.href = '/auth/facebook';
	});

	facebookService.getUserData().then(function (res) {
		userData = res;
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
			$scope.firstLoad = false;

			// $scope.onCommentClick($scope.posts[0].comments.data[0]);
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

	function chooseWeightedRandom(set) {
		var rand = Math.random(),
		    sum = 0;
		for (var i = 0; i < set.length; i++) {
			sum += set[i].weight;

			if (rand < sum) {
				return set[i];
			}
		}

		debugger;
		throw new Error('WTF');
	}

	function isHebOnly(text) {
		return !/[a-z|A-Z]/.test(text);
	}

	$scope.closenessBars = [];
	for (var i = 0; i < 7; i++) {
		$scope.closenessBars.push({
			opacity: 1 - i / 6
		});
	}

	$scope.onCommentClick = function (comment) {
		console.log(comment);
		$scope.selectedComment = comment;

		var isHeb = isHebOnly(comment.message);

		// Choose a random font
		//
		do {
			$scope.font = chooseWeightedRandom(appData.fonts);
		} while (!isHeb && $scope.font.hebOnly);

		// Choose a random layout
		//
		$scope.layout = chooseWeightedRandom(appData.layouts);

		// Choose random color
		//
		$scope.bgColor = chooseWeightedRandom(appData.bgColors);

		// Choose random post effect
		//
		$scope.post = chooseWeightedRandom(appData.posts);

		// Choose random post effect
		//
		$scope.textPost = chooseWeightedRandom(appData.textPosts);

		// Choose random post effect
		//
		$scope.giantText = chooseWeightedRandom(appData.giantTexts);

		$scope.eBars = [];
		var commentHash = md5.createHash(comment.message),
		    i;
		for (i = 0; i < 7; i++) {
			var value = commentHash.substr(i, 1);
			if (value >= 'a' && value <= 'z') {
				value = (value.charCodeAt(0) - 97) / 25;
			} else if (value >= '0' && value <= '9') {
				value = (value.charCodeAt(0) - 48) / 9;
			}
			$scope.eBars.push({
				height: value * 0.7 + 0.3
			});
		}

		var words = comment.message.split(' ');
		$scope.knownWords = [];
		$scope.possibleWords = [];
		for (i = 0; i < appData.knownWords.length; i++) {
			var section = appData.knownWords[i];
			for (var j = 0; j < section.words.length; j++) {
				for (var k = 0; k < words.length; k++) {
					var word = section.words[j];
					if (words[k].indexOf(word) > -1 &&
						$scope.knownWords.indexOf(word) === -1) {

						$scope.knownWords.push(word);
						$scope.possibleWords.push({
							word: word,
							id: section.id
						});
					}
				}
			}
		}

		if ($scope.possibleWords.length && !$scope.randomize) {
			var data = $scope.possibleWords[
				Math.floor(Math.random() * $scope.possibleWords.length)
			];
			$scope.knownWord = data.word;
			$scope.icon = _.find(appData.icons, { id: data.id });
		} else {
			$scope.knownWord = '';
			$scope.icon = chooseWeightedRandom(appData.icons);
		}

		$scope.closeness = facebookService.proximity(comment.from.id) * 0.9;

		// Choose random color if background is white, otherwise set text color
		// to white.
		//
		if ($scope.bgColor.value === '#ffffff' || $scope.bgColor.value === '#333333') {
			$scope.textColor = appData.textColors[
				Math.floor(Math.random() * (appData.textColors.length - 2) + 1)
			];
		} else {
			$scope.textColor = appData.textColors[0];
		}

		updateDebugOptions();
	};

	/*******************************/
	/*********** Gallery ***********/
	/*******************************/

	function preparePoster(poster) {
		poster.font       = _.find(appData.fonts,      { id: poster.font });
		poster.layout     = _.find(appData.layouts,    { id: poster.layout });
		poster.bgColor    = _.find(appData.bgColors,   { id: poster.bgColor });
		poster.post       = _.find(appData.posts,      { id: poster.post });
		poster.textPost   = _.find(appData.textPosts,  { id: poster.textPost });
		poster.giantText  = _.find(appData.giantTexts, { id: poster.giantText });
		poster.textColor  = _.find(appData.textColors, { id: poster.textColor });
		poster.icon       = _.find(appData.icons,      { id: poster.icon });
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
			post      : $scope.post.id,
			textPost  : $scope.textPost.id,
			knownWord : $scope.knownWord,
			giantText : $scope.giantText.id,
			textColor : $scope.textColor.id,
			icon      : $scope.icon.id,
			creator   : {
				name: userData.name,
				id: userData.id
			}
		});

		$scope.gallery.posters.unshift({
			comment   : $scope.selectedComment,
			font      : $scope.font,
			layout    : $scope.layout,
			bgColor   : $scope.bgColor,
			post      : $scope.post,
			textPost  : $scope.textPost,
			knownWord : $scope.knownWord,
			giantText : $scope.giantText,
			textColor : $scope.textColor,
			icon      : $scope.icon,
			poster    : poster
		});

		return poster.$save();
	};

	$scope.onPrint = function () {
		window.print();
	};

	$scope.onShare = function () {
		$scope.onSave().then(function (res) {
			facebookService.share(res._id);
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

	// Not the prettiest thing, but will do for now.
	//
	window.onresize = function () {
		var maxWidth = $('#mainPoster').parent().parent().width() - 77,
			maxHeight = window.innerHeight - 100,
			// A_SERIES_ASPECT = 1.414141414141;
			// A_SERIES_ASPECT = 297/210;
			A_SERIES_ASPECT = Math.sqrt(2);

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

	// Should probably be in appData.service, but fuck it for now
	//
	var selectedControl;

	$scope.controls = [
		{
			label: 'Image',
			name: 'icons',
			data: appData.icons
		},
		{
			label: 'Layout',
			name: 'layouts',
			data: appData.layouts
		},
		{
			label: 'Font',
			name: 'fonts',
			data: appData.fonts
		},
		{
			label: 'Font Color',
			name: 'textColors',
			data: appData.textColors
		},
		{
			label: 'Background',
			name: 'bgColors',
			data: appData.bgColors
		},
		{
			label: 'Effect',
			name: 'posts',
			data: appData.posts
		},
		{
			label: 'Extra Text',
			name: 'giantTexts',
			data: appData.giantTexts
		},
		{
			label: 'Text Effect',
			name: 'textPosts',
			data: appData.textPosts
		}
	];

	$scope.selectControl = function (control) {
		if ($scope.selectedControl) {
			$scope.selectedControl.selected = false;
		}
		$scope.selectedControl = control;
		$scope.selectedControl.selected = true;
	};

	$scope.selectControl($scope.controls[0]);

	// For some reason I need to call this after a while (1 sec or more),
	// otherwise the scaling for printing gets screwed up...
	//
	setTimeout(window.onresize, 100);
	setTimeout(window.onresize, 1000);

});
