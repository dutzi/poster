'use strict';

// Development specific configuration
// ==================================
module.exports = {
  DOMAIN: 'http://comment-poster.herokuapp.com',
  PORT: 80,
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/poster-dev'
  },

  seedDB: true
};
