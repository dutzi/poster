'use strict';

angular.module('posterApp').controller('HomeCtrl', function (
	$scope,
	$timeout,
	$interval,
	$window,
	$location,
	$state,
	$sce,
	appData,
	Poster,
	facebookService
) {
	/*******************************/
	/********** Hero Image *********/
	/*******************************/

	$scope.images = [
		{
			url: 'http://cdn.poster.re/assets/images/introduction1.png',
			iframeUrl: $sce.trustAsResourceUrl(
				'http://cdn.poster.re/assets/animations/animation1/index.html'
			),
			duration: 10,
			color: '#7fcee4',
			selected: true
		},
		{
			url: 'http://cdn.poster.re/assets/images/introduction2.png',
			iframeUrl: $sce.trustAsResourceUrl(
				'http://cdn.poster.re/assets/animations/animation2/index.html'
			),
			duration: 12,
			color: '#f2d47d',
			selected: false
		},
		{
			url: 'http://cdn.poster.re/assets/images/introduction3.png',
			iframeUrl: $sce.trustAsResourceUrl(
				'http://cdn.poster.re/assets/animations/animation3/index.html'
			),
			marginLeft: 50,
			duration: 10,
			color: '#c6db62',
			selected: false
		}
	];

	$scope.selectedImageIndex = 0;
	var playNextAnimationTimer;

	$scope.setSelectedImage = function (index) {
		$scope.images[$scope.selectedImageIndex].selected = false;

		if (index >= 3) { index = 0; }

		$scope.selectedImageIndex = index;

		$scope.images[index].selected = true;

		if (playNextAnimationTimer) {
			$timeout.cancel(playNextAnimationTimer);
		}
		playNextAnimationTimer = $timeout(function () {
			$scope.setSelectedImage(index + 1);
		}, $scope.images[index].duration * 1000);
	};

	$scope.setSelectedImage(0);


	/*******************************/
	/************ Login ************/
	/*******************************/

	$scope.loginOauth = function() {
		$window.location.href = '/auth/facebook';
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
		var i;

		$scope.gallery = {
			posters: data.reverse()
		};

		for (i = 0; i < data.length; i++) {
			preparePoster(data[i]);
		}

		var lines = [[]],
		    j = 0,
		    currentLine = 0;

		for (i = 0; i < data.length; i++) {
			if (((j % 3 === 0 && currentLine % 2 === 0) ||
			     (j % 2 === 0 && currentLine % 2 === 1)) && j) {
				j = 0;
				currentLine = lines.length;
				lines.push([]);
			}
			lines[currentLine].push(data[i]);
			j++;
		}

		$scope.gallery.lines = lines;
	});

	$scope.openPoster = function (poster) {
		$location.path('/poster/' + poster._id);
	};

	$scope.sharePoster = function (poster) {
		facebookService.share(poster._id);
	};


	$scope.numVisibleLines = 1;

	$interval(function () {
		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
			$scope.numVisibleLines++;
		}
	}, 1000);

	if ($state.current.name === 'home-gallery') {
		setTimeout(function () {
			$('body').stop().animate({
				scrollTop: window.innerHeight
			}, '500', 'swing');
		}, 1000);
	}

	/*******************************/
	/*********** Resize ************/
	/*******************************/

	function onResize() {
		$('.jumbo').height(window.innerHeight);
	}

	window.addEventListener('resize', onResize);

	onResize();
});
