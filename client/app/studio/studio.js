'use strict';

angular.module('posterApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('studio', {
        url: '/studio',
        templateUrl: 'app/studio/studio.html',
        controller: 'StudioCtrl'
      });
  });
