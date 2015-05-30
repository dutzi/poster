'use strict';

angular.module('posterApp').directive('dirDetect', function () {
    return {
		// template: '<div></div>',
		restrict: 'A',
		link: function (scope, element, attrs) {
			scope.$watch(attrs.dirDetect, function (value) {
				var len = Math.min(value && value.length || 0, 10);
				// This checks if the text contains RTL characters, not the
				// perfect solution, but good for now.
				//
				// Based on: http://stackoverflow.com/a/14824756/551843
				//
				var ltrChars    = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF'+'\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
				    rtlChars    = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
				    rtlDirCheck = new RegExp('^[^'+ltrChars+']*['+rtlChars+']');

				if (rtlDirCheck.test(value)) {
					element[0].style.direction = 'rtl';
				}
			});
		}
	};
});
