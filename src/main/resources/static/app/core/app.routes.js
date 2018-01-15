app.config(function ($routeProvider) {
    $routeProvider.when("/",{
      templateUrl: "core/main/searchProductView.html",
      controller: "SearchProductCtrl"
    }).when("/products",{
        templateUrl: "core/main/searchProductView.html",
        controller: "SearchProductCtrl"
    })
    //     .when("/products/create-product",{
    //     templateUrl: "view/createProductView.html",
    //     controller: "CreateProductCtrl"
    // })
        .otherwise({
        redirectTo: '/'
    });
});
