'use strict';

angular.module("createProduct")
  .component("createProduct", {
    templateUrl: "app/components/create-product/create-product-modal.html",
    bindings: {
      close: '&',
      dismiss: '&',
      resolve: '<'
    },
    controller: function ($scope, $http, toastr) {

        var $ctrl = this;

        $ctrl.product = {};

        $ctrl.listaDeSituacoes = [
            {
                nome: "Disponivel",
                valor: 1
            }, {
                nome: "Em Falta",
                valor: 2
            }
        ];

        $scope.createProduct = function (product) {

            // if (situacao) {
            //     if (situacao === 1) {
            //         product.situacao = 1
            //     } else {
            //         product.situacao = 2
            //     }
            // }

            // product.situacao = situacao === 1 ? 1 : 2;

            $http.post("https://estoque-facil-si.herokuapp.com/api/produto/", JSON.stringify(product))
                .then(function success(response) {
                    if (response.status === 201) {
                        toastr.success("Produto adicionado com sucesso!");
                        $ctrl.product = {};
                        console.log(response);
                        $ctrl.close({$value: 201});
                    }
                }, function error(error) {
                    console.log(error);
                    toastr.error("Problemas ao tentar adicionar produto.");
                });
        };

        $scope.cancel = function () {
            $ctrl.dismiss({$value: 'cancel'});
        };
    }

});
