'use strict';

/**
 * Removes server error when user updates input
 */
angular.module('posterApp').directive('poster', function (
	$q,
	appData
) {
	return {
		restrict: 'C',
		scope: {
			comment   : '=',
			font      : '=',
			layout    : '=',
			bgColor   : '=',
			post      : '=',
			textPost  : '=',
			textColor : '=',
			giantText : '=',
			icon      : '=',
			animate   : '=',
			width     : '@',
			height    : '@'
		},
		link: function(scope, element, attrs, ngModel) {
			var POSTER_WIDTH = 1020;

			scope.closenessBars = [];
			for (var i = 0; i < 7; i++) {
				scope.closenessBars.push({
					opacity: (6 - i) / 6
				});
			}
			function updateIconSize() {
				if (!scope.icon) { return; }

				var width = POSTER_WIDTH * scope.icon.ratio;
				scope.iconCSS = {
					'width': width,
					'height': width / scope.icon.width * scope.icon.height,
					'margin-right': -width / 2,
					'margin-top': -width / scope.icon.width * scope.icon.height / 2
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

			function animWords(text, knownWordIndex, immediate) {
				var deferred = $q.defer(),
				    comment = element.find('#commentHTML'),
				    num = numWords(text),
				    timeDelta = 10,
				    maxTimeDelta = (immediate)
				    	? 0
				    	: Math.min(num * 150 / 14, 200);

				function emRandomWord() {
					var index, newText;

					if (timeDelta < maxTimeDelta) {
						index = Math.floor(Math.random() * num);
						newText = emWord(text, index, 'suspected');

						comment.html(newText);
						setTimeout(emRandomWord, timeDelta);
						timeDelta = timeDelta * 1.07;
					} else {
						if (knownWordIndex > -1) {
							comment.html(emWord(text, knownWordIndex, 'highlighted'));
						} else {
							comment.html(text);
						}

						setTimeout(function () {
							deferred.resolve();
						}, (num > 2)?0:100);
					}
				}

				emRandomWord();

				return deferred.promise;
			}

			function animHalogen(el, immediate) {
				if (!immediate) {
					var hideInterval = setInterval(function () {
						el.style.display = 'none';
					}, Math.random() * 60 + 40);

					var showInterval = setInterval(function () {
						el.style.display = 'block';
						el.style.transform = 'scale(' + 12 + ')';
					}, Math.random() * 60 + 40);
				}

				setTimeout(function () {
					clearInterval(hideInterval);
					clearInterval(showInterval);
					el.style.transform = 'scale(1)';
					el.style.display = 'block';
				}, (immediate) ? 0 : 500);
			}

			function animFont(immediate) {
				var el = element.find('#posterCommentText')[0];
				var numFonts = appData.fonts.length;

				var animInterval = setInterval(function () {
					el.style.fontFamily = appData.fonts[
						Math.floor(Math.random() * numFonts)
					].fontName;
				}, 400);

				var stopAnim = function () {
					clearInterval(animInterval);
					el.style.fontFamily = scope.font.fontName;
				};

				setTimeout(stopAnim, (immediate) ? 0 : 1500);

				return stopAnim;
			}

			function animShadow() {
				var el = element.find('#posterCommentText')[0];
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

			function onUpdate() {

				if (!scope.comment) { return; }

				var text = scope.comment.message;
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
				var selectedIcon = scope.icon;
				scope.icon = null;

				var stopFontAnimation = animFont(!scope.animate);
				if (scope.animate) {
					animShadow();
				}

				animWords(
					text,
					knownWordIndex,
					!scope.animate
				).then(function () {

					stopFontAnimation();

					scope.icon = selectedIcon;

					for (var i = 0; i < scope.layout.data.length; i++) {
						var imageEl = element.find('#iconImage' + i)[0];
						animHalogen(imageEl, !scope.animate);
					}

					updateIconSize();

				});

				scope.bars = [];
				for (i = 0; i < 11; i++) {
					scope.bars.push({
						height: Math.random() * 30 + 'px'
					});
				}
			}

			function onResize() {
				scope.scale = scope.width / POSTER_WIDTH;
				element[0].style.width = scope.width + 'px';
				element[0].style.height = scope.height + 'px';
				updateIconSize();
			}

			scope.$watch('font', function () {
				if (scope.font) {
					var el = element.find('#posterCommentText')[0];
					el.style.fontFamily = scope.font.fontName;
				}
			});

			scope.$watch('icon', function () {
				if (scope.icon) {
					scope.footerIconPreview = scope.icon.url;
					updateIconSize();
				}
			});

			scope.$watch('comment', onUpdate);
			scope.$watch('width', onResize);
			scope.$watch('height', onResize);
		},

		templateUrl: 'components/poster/poster.directive.html'
	};
});
