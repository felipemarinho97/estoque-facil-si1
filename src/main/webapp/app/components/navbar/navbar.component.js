'use strict';

angular.module('navbar')
  .component('navbar', {
    templateUrl: "app/components/navbar/navbar.html",
    controller: ($scope, products) => {
      // do something
      $scope.srv = products;
    }
});
