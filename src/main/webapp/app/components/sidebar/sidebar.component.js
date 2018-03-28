'use strict';

angular.module('sidebar')
  .component('sidebar', {
    templateUrl: "app/components/sidebar/sidebar.html",
    controller: ($scope, products) => {
      // do something
      $scope.srv = products;
    }
});
