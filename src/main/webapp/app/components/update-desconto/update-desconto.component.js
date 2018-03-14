'use strict';

angular.module("updateDesconto")
  .component("updateDesconto", {
    templateUrl: "app/components/update-desconto/update-desconto-modal.html",
    bindings: {
      close: '&',
      dismiss: '&',
      resolve: '<'
    },
    controller: function ($scope, $http, $location, toastr, products) {
      var $ctrl = this;

      $ctrl.$onInit = function() {
        $ctrl.produto = $ctrl.resolve.produto;
        $scope.produto = $ctrl.produto;
        $ctrl.productsList = [];
        $ctrl.productsList = [];

        $ctrl.loadProductsList = function () {
            products.getAllProducts()
                .then(function successCallback(response) {
                    $ctrl.productsList = response.data;
                }, function errorCallback(error) {
                    console.log(error);
                });
        };

        $scope.submit = function (desc) {
        	$ctrl.loadProductsList;

            $ctrl.desconto = desc;
            var i;
            var len = $ctrl.productsList.length;
            $ctrl.desconto *= 0.01;

            for (i = 0; i< len; i++){

                if ($ctrl.productsList[i].categoria == $scope.produto.categoria){

                    $ctrl.productsList[i].preco = $ctrl.productsList[i].realPreco * $ctrl.desconto;

                    products.updateProductById($ctrl.productsList[i].id, $ctrl.productsList[i])
                      .then(function success(response) {
                        console.log(i);
                      }, function error(error) {
                        console.log(error);
                      });
                }
            }

            $ctrl.close({$value: {
                status: 201
            }});
            $ctrl.loadProductsList();
            $ctrl.loadProductsList();

            toastr.success("Desconto de " + (100-desc) + "% aplicado com sucesso!");
            $scope.changeRoute("#/produtos")

        };

        $scope.cancel = function () {
            $ctrl.dismiss({$value: 'cancel'});
            $ctrl.loadProductsList();
        };

        $scope.changeRoute = function(url, forceReload) {
            $scope = $scope || angular.element(document).scope();
            if(forceReload || $scope.$$phase) {
                window.location = url;
            } else {
                $location.path(url);
                $scope.$apply();
            }
        };

        $ctrl.loadProductsList();
        $ctrl.loadProductsList();

      }
    }

});
