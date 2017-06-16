var app = angular.module('contact');

app.controller('contact.controlleur',['$scope','$http', contactController] );

function contactController($scope, $http){
	
//	var contact = $scope.contact;
	console.log("i am contact controller");
	
	$scope.envoyerMessage = function(contact){
		
			$http.post('/envoieMessage', contact)
			.success(function(){
				console.log("objet contact"+contact);
			});
			
	}
	
	$scope.$on('$viewContentLoaded', function() {
		map()
	});
	
	
}