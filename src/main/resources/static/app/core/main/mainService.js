app.factory("mainService", function ($http, BASE_SERVER_URL) {

    return {
        getAllProducts: _getAllProducts
    };
    
    function _getAllProducts() {
        return $http.get(BASE_SERVER_URL + "/produto/")
    }
    
});