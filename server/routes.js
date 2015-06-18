/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/posters', require('./api/poster'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));



  // var fs = require('fs');
  // var express = require('express');
  // var config = require('./config/environment');
  // var posterRouter = express.Router();
  // posterRouter.get('/:id', function (req, res) {
  //   var html = fs.readFileSync(app.get('appPath') + '/index.html', 'utf8');
  //   // res.sendfile(app.get('appPath') + '/index.html');
  //   var metadata = '<meta property="og:image" content="/screenshots/' + req.params.id + '.png" />';
  //   res.send(html.replace('<head>', '<head>' + metadata));
  // });
  // app.use('/poster', posterRouter);

  // var screenshotsRouter = express.Router();
  // screenshotsRouter.get('/:id', function (req, res) {
  //   res.sendfile(config.root + '/data/screenshots/' + req.params.id);
  // });
  // app.use('/screenshots', screenshotsRouter);

  var fs = require('fs');
  var express = require('express');
  var posterRouter = express.Router();
  posterRouter.get('/:id', function (req, res) {
    var html = fs.readFileSync(app.get('appPath') + '/index.html', 'utf8');

    var Poster = require('./api/poster/poster.model');
    Poster.findById(req.params.id, function (err, poster) {
      if(err) { return ''; }
      if(!poster) { return '' }
      var metadata = '<meta property="og:description" content="&ldquo;' + poster.comment.message + '&rdquo;" />';
      res.send(html.replace('<head>', '<head>' + metadata));
    });


  });
  app.use('/poster', posterRouter);


  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
