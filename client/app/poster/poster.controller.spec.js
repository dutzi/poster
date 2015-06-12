'use strict';

describe('Controller: PosterCtrl', function () {

  // load the controller's module
  beforeEach(module('posterApp'));

  var PosterCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PosterCtrl = $controller('PosterCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
