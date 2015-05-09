'use strict';

// Development specific configuration
// ==================================
module.exports = {
  DOMAIN: 'http://localhost:9000',
  PORT: 9000,
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/poster-dev'
  },

  seedDB: true
};
