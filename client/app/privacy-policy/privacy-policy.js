'use strict';

angular.module('posterApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('privacy-policy', {
        url: '/privacy-policy',
        templateUrl: 'app/privacy-policy/privacy-policy.html',
        controller: 'PrivacyPolicyCtrl'
      });
  });