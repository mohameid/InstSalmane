var app = angular.module('contact');

app.Controller('contact.controlleur',['$scope','$http',contactController]);

function contactController($scope,$http){
	
//	var contact = $scope.contact;
	
	$scope.envoyerMessage = function(contact){
			$http.get("/envoieMessage?nom="+contact.nom+"&prenom="+contact.prenom+"&email="+contact.email+"&objet="+contact.objet+"&message="+contact.message)
			.success(function(){
				console.log("objet contact"+contact);
			});
			
	}
	
	
	
	
}