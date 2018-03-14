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
            console.log($ctrl.productsList);
            
            for (i = 0; i< len; i++){
                if ($ctrl.productsList[i].categoria == $scope.produto.categoria){
                    $ctrl.productsList[i].preco = $ctrl.productsList[i].realPreco * $ctrl.desconto;
                    
                    products.updateProductById($ctrl.productsList[i].id, $ctrl.productsList[i])
                      .then(function success(response) {
                        console.log(response.data);
                      }, function error(error) {
                        console.log(error);
                      });
                }
            }

            $ctrl.close({$value: {
                status: 201
            }});
            $ctrl.loadProductsList();
                
        };

        $scope.cancel = function () {
            $ctrl.dismiss({$value: 'cancel'});
            $ctrl.loadProductsList();
        };

        $ctrl.loadProductsList();
        $ctrl.loadProductsList();

      }
    }

});
