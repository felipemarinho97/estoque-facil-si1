'use strict';

angular.module("updateProductPrice")
  .component("updateProductPrice", {
      templateUrl: "app/components/update-product-price/update-product-price-modal.html",
      bindings: {
        close: '&',
        dismiss: '&',
        resolve: '<'
      },
      controller: function($scope, products, toastr) {
        var $ctrl = this;

        $ctrl.$onInit = function() {
          $ctrl.produto = $ctrl.resolve.produto;

          $scope.produto = $ctrl.produto;

          $scope.submit = function(product) {

            //adicionar

            console.log(product)

            products.updateProductById(product.codigoBarra, product)
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
                toastr.error("Problemas ao tentar atribuir preço ao produto: " + product.codigoBarra);
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
