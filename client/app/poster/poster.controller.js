'use strict';

angular.module('posterApp').controller('PosterCtrl', function (
	$scope,
	$stateParams,
	facebookService,
	appData,
	Poster
) {

	function preparePoster(poster) {
		poster.font       = _.find(appData.fonts,      { id: poster.font });
		poster.layout     = _.find(appData.layouts,    { id: poster.layout });
		poster.bgColor    = _.find(appData.bgColors,   { id: poster.bgColor });
		poster.post       = _.find(appData.posts,      { id: poster.post });
		poster.textPost   = _.find(appData.textPosts,  { id: poster.textPost });
		poster.giantText  = _.find(appData.giantTexts, { id: poster.giantText });
		poster.textColor  = _.find(appData.textColors, { id: poster.textColor });
		poster.icon       = _.find(appData.icons,      { id: poster.icon });

		return poster;
	}

	Poster.get({id: $stateParams.id}, function (res) {
		console.log('ress', res);
		$scope.poster = preparePoster(res);
	}, function (err) {
		console.log('Error loading poster', err);
	});

	$scope.onPrint = function () {
		window.print();
	};

	$scope.onShare = function () {
		facebookService.share($scope.poster._id);
	};

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

	setTimeout(window.onresize, 100);
	setTimeout(window.onresize, 1000);
});
