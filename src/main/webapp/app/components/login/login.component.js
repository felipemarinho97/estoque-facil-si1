'use strict';

angular.module('login')
  .component('login', {
    templateUrl: "app/components/login/login.html",
    controller: ($scope, $location, products, toastr) => {

      $scope.login = () => {
        if ($scope.user == 'admin') {
          products.setAdmin(true);
        } else {
          products.setAdmin(false);
        }
        toastr.success("Você está logado '" + $scope.user + "'!");
        $scope.changeRoute('#/');
      }

      $scope.changeRoute = function(url, forceReload) {
          $scope = $scope || angular.element(document).scope();
          if(forceReload || $scope.$$phase) {
              window.location = url;
          } else {
              $location.path(url);
              $scope.$apply();
          }
      };


    }
});
