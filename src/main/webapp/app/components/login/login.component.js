'use strict';

angular.module('login')
  .component('login', {
    templateUrl: "app/components/login/login.html",
    controller: ($scope, products) => {

      $scope.login = () => {
        if ($scope.user == 'admin') {
          products.setAdmin(true);
        } else {
          products.setAdmin(false);
        }
      }
      $scope.pass;



    }
});
