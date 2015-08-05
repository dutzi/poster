'use strict';

var screenshot = require('url-to-screenshot');
var fs = require('fs');

screenshot('http://localhost:9000/poster/557af72138bc148cb86ad2e7?blank')
	.width(245)
	.height(346)
	.capture(function(err, img) {
		if (err) { throw err; }
		fs.writeFileSync(__dirname + '/example.png', img);
		console.log('open example.png');
	});
