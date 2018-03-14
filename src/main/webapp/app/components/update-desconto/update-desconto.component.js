'use strict';

angular.module("updateDesconto")
  .component("updateDesconto", {
    templateUrl: "app/components/update-desconto/update-desconto-modal.html",
    bindings: {
      close: '&',
      dismiss: '&',
      resolve: '<'
    },
    controller: function ($scope, $http, toastr, products) {
      var $ctrl = this;

      $ctrl.$onInit = function() {
        $ctrl.produto = $ctrl.resolve.produto;
        $scope.produto = $ctrl.produto;
        $ctrl.productsList = [];
        $ctrl.productsList = [];

        var loadProductsList = function () {
            products.getAllProducts()
                .then(function successCallback(response) {
                    $ctrl.productsList = response.data;
                }, function errorCallback(error) {
                    console.log(error);
                });
        };

        // $scope.atribuiDesconto = function (desc){
        //     $ctrl.desconto = desc;
        // };

        $scope.submit = function (desc) {
            $ctrl.desconto = desc;
            var i;
            var len = $ctrl.productsList.length;
            $ctrl.desconto *= 0.01;
            for (i = 0; i< len; i++){
                if ($ctrl.productsList[i].categoria == $scope.produto.categoria){
                    if ($ctrl.productsList[i].realPreco === undefined){
                        $ctrl.productsList[i].realPreco = $ctrl.productsList[i].preco; 
                        $ctrl.productsList[i].preco = $ctrl.productsList[i].realPreco * $ctrl.desconto;           
                    } else {
                        $ctrl.productsList[i].preco = $ctrl.productsList[i].realPreco * $ctrl.desconto;
                    }
                    console.log("real preço: ");
                    console.log($ctrl.productsList[i].realPreco);
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
        };

        $scope.cancel = function () {
            $ctrl.dismiss({$value: 'cancel'});
        };

        loadProductsList();
        loadProductsList();

      }
    }

});
