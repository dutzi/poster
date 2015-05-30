'use strict';

angular.module('posterApp').controller('HomeCtrl', function (
	$scope,
	$interval,
	$window,
	appData,
	Poster
) {
	/*******************************/
	/********** Hero Image *********/
	/*******************************/

	$scope.images = [
		{
			url: '/assets/images/introduction1.png',
			iframeUrl: '/assets/animations/anim1/index.html',
			color: '#7fcee4',
			selected: true
		},
		{
			url: '/assets/images/introduction2.png',
			color: '#f2d47d',
			selected: false
		},
		{
			url: '/assets/images/introduction3.png',
			color: '#c6db62',
			selected: false
		}
	];

	$scope.selectedImageIndex = 0;

	$scope.setSelectedImage = function (index) {
		$scope.images[$scope.selectedImageIndex].selected = false;

		if (index >= 3) {
			$scope.selectedImageIndex = 0;
		} else {
			$scope.selectedImageIndex = index;
		}

		$scope.images[$scope.selectedImageIndex].selected = true;
	};

	$interval(function () {
		$scope.setSelectedImage($scope.selectedImageIndex + 1);
	}, 8000);

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
		poster.font      = _.find(appData.fonts,      { id: poster.font });
		poster.layout    = _.find(appData.layouts,    { id: poster.layout });
		poster.bgColor   = _.find(appData.bgColors,   { id: poster.bgColor });
		poster.textColor = _.find(appData.textColors, { id: poster.textColor });
		poster.icon      = _.find(appData.icons,      { id: poster.icon });
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

	/*******************************/
	/*********** Resize ************/
	/*******************************/

	function onResize() {
		$('.jumbo').height(window.innerHeight);
	}

	window.addEventListener('resize', onResize);

	onResize();
});
