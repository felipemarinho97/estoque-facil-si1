app.controller("SearchProductCtrl", function ($scope, $uibModal, $http, toastr,$location, mainService) {

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
            templateUrl: 'core/main/createProductView.html',
            controller: 'CreateProductCtrl',
            controllerAs: 'cpCtrl'
        });

        modalInstance.result.then(function (result) {
            if (result === 201) {
              loadProductsList();
            }
        });
    };

    $scope.openAtribuirPrecoParaProdutoDialog = function() {

        // var modalInstance = $uibModal.open({
        //     ariaLabelledBy: 'Adicionar Produto',
        //     ariaDescribedBy: 'Formulario para adição de um novo produto',
        //     templateUrl: 'core/main/create-product.html',
        //     controller: 'CreateProductCtrl'
        // });

        var modalInstance = $uibModal.open({
            ariaLabelledBy: 'Atribuir preço á Produto',
            ariaDescribedBy: 'Formulario para Atribuir preço á Produto',
            templateUrl: 'core/main/updateProductPriceView.html',
            controller: 'UpdateProductPriceCtrl'
        });

        modalInstance.result.then(function (result) {
            if (result === 201) {
                console.log("carregamento");
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

    $scope.createLot = function(produto) {
        console.log(produto)
    };

    $scope.atribuirPrice = function(product) {
        console.log(product)
    };

    loadProductsList();
    loadProductsList();
});

app.controller("CreateProductCtrl", function ($uibModalInstance, $http, toastr) {

    var vm = this;

    vm.product = {};

    vm.listaDeSituacoes = [
        {
            nome: "Disponivel",
            valor: 1
        }, {
            nome: "Em Falta",
            valor: 2
        }
    ];

    this.createProduct = function (product, situacao) {

        // if (situacao) {
        //     if (situacao === 1) {
        //         product.situacao = 1
        //     } else {
        //         product.situacao = 2
        //     }
        // }

        product.situacao = situacao === 1 ? 1 : 2;

        $http.post("http://localhost:8080/api/produto/", JSON.stringify(product))
            .then(function success(response) {
                if (response.status === 201) {
                    toastr.success("Produto adicionado com sucesso!");
                    vm.product = {};
                    $uibModalInstance.close(201);
                }
            }, function error(error) {
                console.log(error);
                toastr.error("Problemas ao tentar adicionar produto.");
            });
    };

    this.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

app.controller("UpdateProductPriceCtrl", function ($scope, $uibModalInstance, $http, toastr) {

    $scope.produto = {};

    $scope.submit = function (product, situacao) {

        //adicionar

    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});