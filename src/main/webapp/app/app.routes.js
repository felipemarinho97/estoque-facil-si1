app.config(function ($routeProvider) {
    $routeProvider.when("/login",{
      	templateUrl: "<login></login>"
    });    

    $routeProvider.otherwise({
        redirectTo: '/'
    });
});
