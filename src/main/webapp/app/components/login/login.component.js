'use strict';

angular.module("login")
  .component("login", {
    templateUrl: "app/components/login/login-view.html",
    controller:  function($scope, $http, BASE_SERVER_URL){
    	$scope.autentica = function (usuario){
    		$http.post(BASE_SERVER_URL + "/login/", usuario).then(function(response){
    			console.log("OK");
    		}).catch(function (status){
    			console.log(status);
    		});
    	}
    }
});