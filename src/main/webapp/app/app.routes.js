app.config(function ($routeProvider) {
    $routeProvider.when("/",{
      template: "<search-product></search-product>"
    }).when("/login",{
      	template: "<login></login>"
    });    

    $routeProvider.otherwise({
        redirectTo: '/'
    });
});