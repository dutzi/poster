'use strict';

angular.module('posterApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      })
      .state('home-gallery', {
        url: '/gallery',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      });
  });
