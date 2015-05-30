'use strict';

angular.module('posterApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/studio',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
