'use strict';

describe('Controller: PrivacyPolicyCtrl', function () {

  // load the controller's module
  beforeEach(module('posterApp'));

  var PrivacyPolicyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrivacyPolicyCtrl = $controller('PrivacyPolicyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
