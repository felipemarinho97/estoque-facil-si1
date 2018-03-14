'use strict';

let productService = angular.module("products");

productService.factory("products", function ($http, BASE_SERVER_URL) {

    return {
        getAllProducts: _getAllProducts,
        updateProductById: _updateProductById,
        updateAllProducts: _updateAllProducts,
        findProductById: _findProductById
    };

    function _getAllProducts() {
        return $http.get(BASE_SERVER_URL + "/produto/");
    }
    
    function _updateAllProducts() {
        return $http.post(BASE_SERVER_URL + "/produto/");
    }

    function _updateProductById(id, data) {
        return $http.put(BASE_SERVER_URL + "/produto/" + id, data);
    }

    function _findProductById(id) {
        return $http.get(BASE_SERVER_URL + "/produto/" + id);
    }

});
