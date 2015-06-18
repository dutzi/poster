'use strict';

var _ = require('lodash');
var Poster = require('./poster.model');
// var config = require('../../config/environment');
// var screenshot = require('url-to-screenshot');
// var fs = require('fs');

// Get list of posters
exports.index = function(req, res) {
  Poster.find(function (err, posters) {
    if(err) { return handleError(res, err); }
    return res.json(200, posters);
  });
};

// Get a single poster
exports.show = function(req, res) {
  Poster.findById(req.params.id, function (err, poster) {
    if(err) { return handleError(res, err); }
    if(!poster) { return res.send(404); }
    return res.json(poster);
  });
};

// Creates a new poster in the DB.
exports.create = function(req, res) {
  Poster.create(req.body, function(err, poster) {
    // console.log('created poster', poster);

    // screenshot(config.DOMAIN + '/poster/' + poster._id + '?blank')
    //     .width(245)
    //     .height(346)
    //     .capture(function(err, img) {
    //         if (err) { throw err; }
    //         var filename = config.root + '/data/screenshots/' + poster._id + '.png';
    //         fs.writeFileSync(filename, img);
    //         console.log('open ' + filename);
    //     });

    if (err) { return handleError(res, err); }
    return res.json(201, poster);
  });
};

// Updates an existing poster in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Poster.findById(req.params.id, function (err, poster) {
    if (err) { return handleError(res, err); }
    if(!poster) { return res.send(404); }
    var updated = _.merge(poster, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, poster);
    });
  });
};

// Deletes a poster from the DB.
exports.destroy = function(req, res) {
  Poster.findById(req.params.id, function (err, poster) {
    if(err) { return handleError(res, err); }
    if(!poster) { return res.send(404); }
    poster.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
