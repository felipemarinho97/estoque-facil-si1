app.config(function ($routeProvider) {

    $routeProvider
    .when("/", {
        template: "<home></home>"
    });
    
    $routeProvider    
    .when("/login", {
    	templateUrl: "app/components/login/login-view.html"
    });

    $routeProvider
    .when("/create-lote", {
    	template: "<create-lote></create-lote>"       
    });


    $routeProvider
    .when("/create-product", {
    	template: "<create-product></create-product>"        
    });


    $routeProvider
    .when("/search-product", {
    	template: "<search-product></search-product>"
    });

    $routeProvider
    .when("/update-product", {
    	template: "<update-product></update-product>"       
    });

    $routeProvider
    .otherwise({redirectTo: "/"});
});