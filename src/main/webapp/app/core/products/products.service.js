'use strict';

let productService = angular.module("products");

productService.factory("products", function ($http, BASE_SERVER_URL) {

    return {
        getAllProducts: _getAllProducts,
        updateProductById: _updateProductById,
        updateAllProducts: _updateAllProducts,
	      findProductById: _findProductById,
	      createProduct: _createProduct,
	      createLote : _createLote,
        isAdmin: _isAdmin,
        setAdmin: _setAdmin
    };

    var admin = false;

    function _getAllProducts() {
        return $http.get(BASE_SERVER_URL + "/produto/");
    }

    function _updateAllProducts() {
        return $http.post(BASE_SERVER_URL + "/produto/");
    }

    function _updateProductById(id, product) {
        return $http.put(BASE_SERVER_URL + "/produto/" + id, product);
    }

    function _findProductById(id) {
        return $http.get(BASE_SERVER_URL + "/produto/" + id);
    }

	  function _createProduct(product) {
        return $http.post(BASE_SERVER_URL + "/produto/", product);
    }

    function _createLote(id, lote ) {
        return $http.post(BASE_SERVER_URL + "/produto/" + id + "/lote", lote);
    }

    function _isAdmin() {
      return admin;
    }

    function _setAdmin(bool) {
      admin = bool;
    }

});
