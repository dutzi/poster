'use strict';

angular.module('posterApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('poster', {
        url: '/poster/:id',
        templateUrl: 'app/poster/poster.html',
        controller: 'PosterCtrl'
      });
  });
