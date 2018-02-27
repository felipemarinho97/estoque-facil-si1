'use strict';

angular.module("login")
  .component("login", {
    templateUrl: "app/components/login/login-view.html",
    controller: function ($scope, $http, toastr) {

        var $ctrl = this;

        $ctrl.product = {};

        $scope.autentica = function (usuario) {
        	console.log("Autenticou!!");
        }
        
/*        $scope.createProduct = function (product) {

            $http.post("http://localhost:8080/api/produto/", JSON.stringify(product))
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
*/

    }

});
