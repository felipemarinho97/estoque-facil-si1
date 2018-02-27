angular.module("login").controller('loginCtrl', function($scope, $http){
	
	$scope.autentica = function (usuario){
		$http.post("http://localhost:8080/api/login/", usuario).then(function(response){
			console.log("OK");
		}).catch(function (status){
			console.log(status);
		});
	}
});