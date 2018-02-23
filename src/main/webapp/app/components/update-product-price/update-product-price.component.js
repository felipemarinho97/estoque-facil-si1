'use strict';

angular.module("updateProductPrice")
  .component("updateProductPrice", {
      templateUrl: "app/update-product-price/update-product-price-modal.html",
      bindings: {
        close: '&',
        dismiss: '&',
        resolve: '<'
      },
      controller: function($scope, mainService, toastr) {
        var $ctrl = this;

        $ctrl.$onInit = function() {
          $ctrl.produto = $ctrl.resolve.produto;

          $scope.produto = $ctrl.produto;

          $scope.submit = function(product) {

            //adicionar

            console.log(product)

            mainService.updateProductById(product.id, product)
              .then(function success(response) {

                if (response.status === 200) {
                  toastr.success("Produto editado com sucesso!");
                  $ctrl.close({$value: {
                    status: 200,
                    newProduct: response.data
                  }});
                }
              }, function error(error) {
                console.log(error);
                toastr.error("Problemas ao tentar atribuir preço ao produto: " + product.id);
              });

          };

          $scope.cancel = function() {
            $ctrl.dismiss({
              $value: 'cancel'
            });
          };
        };
      }
    }

  );