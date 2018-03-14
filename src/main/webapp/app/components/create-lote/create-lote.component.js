'use strict';

angular.module("createLote")
  .component("createLote", {
    templateUrl: "app/components/create-lote/create-lote-modal.html",
    bindings: {
      close: '&',
      dismiss: '&',
      resolve: '<'
    },

    controller: function ($scope,toastr, products) {
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
            
            var lote = {
                dataDeValidade: dataDeValidade.getDay() + "/" + (dataDeValidade.getMonth() + 1) + dataDeValidade.getFullYear(),
                numeroDeItens: numeroDeItens
            }
                products.createLote($ctrl.produto.id, lote)
                .then(function success(response) {
                    console.log(response)
                    if (response.status === 201) {
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
