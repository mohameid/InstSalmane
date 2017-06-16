var app = angular.module('inscription',[]);

app.controller('inscription.controlleur',['$scope',inscriptionControlleur]);

function inscriptionControlleur($scope){
	
	$scope.$on('$viewContentLoaded', function() {
		formulaireInscription()
	});
	console.log("i am inscription controller");
	
}