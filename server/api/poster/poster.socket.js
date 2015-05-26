/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Poster = require('./poster.model');

exports.register = function(socket) {
  Poster.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Poster.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('poster:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('poster:remove', doc);
}