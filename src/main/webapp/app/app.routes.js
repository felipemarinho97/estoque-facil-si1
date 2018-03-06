app.config(function ($routeProvider) {

    $routeProvider
    .when("/", {
        templateUrl: "app/components/home/home-view.html"
    });
    
    $routeProvider    
    .when("/login", {
    	templateUrl: "app/components/login/login-view.html"
    });

    $routeProvider
    .when("/create-lote", {
    	templateUrl: "app/components/create-lote/create-lote-modal.html"       
    });


    $routeProvider
    .when("/create-product", {
    	templateUrl: "app/components/create-product/create-product-modal.html"        
    });


    $routeProvider
    .when("/search-product", {
    	templateUrl: "app/components/search-product/search-product-view.html"
    });

    $routeProvider
    .when("/update-product", {
    	templateUrl: "app/components/update-product-price/update-product-price-modal.html"       
    });

    $routeProvider
    .otherwise({redirectTo: "/"});
});