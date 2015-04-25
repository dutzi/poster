'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'poster-secret',

  FACEBOOK_ID:      '1604991596453698',
  FACEBOOK_SECRET:  '4be1c83ff6cf79423e07f696e1520667',

  TWITTER_ID:       'app-id',
  TWITTER_SECRET:   'secret',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
