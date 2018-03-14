app.config(function ($routeProvider) {
    $routeProvider.when("/",{
      	template: "<search-product></search-product>"
    });    

    $routeProvider.otherwise({
        redirectTo: '/'
    });
});
