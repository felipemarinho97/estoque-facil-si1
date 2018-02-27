app.config(function ($routeProvider) {
    $routeProvider.when("/",{
      template: "<search-product></search-product>"
    }).when("/products",{
      template: "<search-product></search-product>"
    }).when("/login",{
      templateUrl: 'app/components/login/login-view.html'
    	  
    })
    //     .when("/products/create-product",{
    //     templateUrl: "view/createProductView.html",
    //     controller: "CreateProductCtrl"
    // })
        .otherwise({
        redirectTo: '/'
    });
});
