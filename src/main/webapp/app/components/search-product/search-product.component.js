'use strict';

angular.module("searchProduct").
  component("searchProduct", {
    templateUrl: "app/components/search-product/search-product-view.html",
    controller: function ($scope, $uibModal, $http, toastr, $location, mainService) {
        var $ctrl = this;
        var urlServer = "http://localhost:8080/api/";
        // $scope.title = "Search Product";
        $scope.productsList = [];
        $scope.produtos = [];

        var loadProductsList = function () {
            // $http.get("http://localhost:8080/api/")
            //     .then(function successCallback(response) {
            //         $scope.productsList = response.data;
            //     });

            mainService.getAllProducts()
                .then(function successCallback(response) {
                    $scope.productsList = response.data;
                }, function errorCallback(error) {
                    console.log(error);
                });
        };

        $scope.openCreateProductDialog = function() {
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'Adicionar Produto',
                ariaDescribedBy: 'Formulario para adição de um novo produto',
                component: 'createProduct',
            });

            modalInstance.result.then(function (result) {
                console.log(result);
                if (result === 201) {
                  loadProductsList();
                }
            });
        };

        $scope.openAtribuirPrecoParaProdutoDialog = function(product) {

            // var modalInstance = $uibModal.open({
            //     ariaLabelledBy: 'Adicionar Produto',
            //     ariaDescribedBy: 'Formulario para adição de um novo produto',
            //     templateUrl: 'core/main/create-product.html',
            //     controller: 'CreateProductCtrl'
            // });

            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'Atribuir preço á Produto',
                ariaDescribedBy: 'Formulario para Atribuir preço á Produto',
                component: 'updateProductPrice',
                resolve: {
                    produto: function () {
                        return angular.copy(product);
                    }
                }
            });

            modalInstance.result.then(function (result) {
                console.log(result)
                if (result.status === 200) {
                    loadProductsList();
                }
            });
        };

        $scope.pesquisarProdutoPorId = function(id) {
            // implementar
            console.log(id)
            $http.get("http://localhost:8080/api/produto/" + id)
                .then(function successCallback(response) {
                    $scope.productsList = [
                        response.data
                    ]
                    console.error("Não carregou")
                }, function errorCallback(error) {
                    console.error(error);
                    if (error.status === 404) {
                        console.log(error);
                        console.log(error.errorMessage);
                        toastr.error(error.data.errorMessage);
                    } else if (error.status === 400) {
                        toastr.error("Produto não encontrado");
                    }
                });
        };

        $scope.openCriarLoteDialog = function(product) {

            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'Criar lote',
                ariaDescribedBy: 'Formulario para criar lote',
                component: 'createLote',
                resolve: {
                    produto: function () {
                        return angular.copy(product);
                    }
                }
            });

            modalInstance.result.then(function (result) {
                console.log(result)
                if (result.status === 201) {
                    loadProductsList();
                }
            });
        };

        // $scope.createLot = function(produto) {
        //     console.log(produto)
        // };
        //
        // $scope.atribuirPrice = function(product) {
        //     console.log(product)
        // };

        loadProductsList();
        loadProductsList();
    }
  });
