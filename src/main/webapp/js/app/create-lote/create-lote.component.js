'use strict';

angular.module("createLote")
  .component("createLote", {
    templateUrl: "templates/create-lote-modal.html",
    bindings: {
      close: '&',
      dismiss: '&',
      resolve: '<'
    },
    controller: function ($scope, $http, toastr) {
      var $ctrl = this;

      $ctrl.$onInit = function() {
        $ctrl.produto = $ctrl.resolve.produto;
        $scope.produto = $ctrl.produto;
        $scope.dateformat = 'dd/MM/yyyy';
        $scope.datePicker = {
            opened : false
        };

        $scope.dataDeValidade = new Date();
        $scope.numeroDeItens = 0;

        $scope.dateOptions = {
            formatYear: 'yy',
            minDate: new Date(),
            startingDay: 1
        };

        $scope.submit = function (dataDeValidade, numeroDeItens) {

            //adicionar
            var lote = {
                dataDeValidade: dataDeValidade.getDay() + "/" + (dataDeValidade.getMonth() + 1) + dataDeValidade.getFullYear(),
                numeroDeItens: numeroDeItens
            }

            $http.post("http://localhost:8080/api/produto/" + $ctrl.produto.id + "/lote", JSON.stringify(lote))
                .then(function success(response) {
                    console.log(response)
                    if (response.status === 201) {
                        console.log("Lote criado com sucesso!");
                        toastr.success("Lote criado com sucesso!");
                        $ctrl.close({$value: {
                            status: 201
                        }});
                    }
                }, function error(error) {
                    console.log(error);
                    toastr.error("Problemas ao tentar adicionar produto.");
                });
        };

        $scope.cancel = function () {
            $ctrl.dismiss({$value: 'cancel'});
        };

        $scope.openDatePicker = function () {
            $scope.datePicker.opened = true;
        }
      }
    }

});
