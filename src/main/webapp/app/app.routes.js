app.config(function ($routeProvider) {
    $routeProvider.when("/",{
      template: "<search-product></search-product>"
    }).when("/products",{
      template: "<search-product></search-product>"
    }).when("/login",{
      template: "<login></login>"    	  
    })
        .otherwise({
        redirectTo: '/'
    });
});
