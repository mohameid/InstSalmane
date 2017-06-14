var app = angular.module('salmane',['ngRoute']);
 
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {  
		    $routeProvider.
		    when('/', {
		    	controller:     'salmane.controlleur',
		    	templateUrl : 'app/components/acceuil/acceuil.html'
		    })
		    .when('/index.html', {
		    	controller:     'salmane.controlleur',
		    	templateUrl : 'app/components/acceuil/acceuil.html'
		    })
		    .when('/text.html', {
		    	controller:     'salmane.controlleur',
		    	templateUrl : 'app/text.html'
		    })
		    .when('/contact.html', {
		    	controller:     'contact.controlleur',
		    	templateUrl : 'app/components/contact/contact.html'
		    });  
		    
		    $locationProvider.html5Mode({
		    	  enabled: true,
		    	  requireBase: false
		    	});
		   
}]);

app.controller('test.controlleur', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

app.controller('contact.controlleur', function($scope,$http) {
	
	$scope.envoyerMessage = function(contact){
		$http.get("/envoieMessage?nom="+contact.nom+"&prenom="+contact.prenom+"&email="+contact.email+"&objet="+contact.objet+"&message="+contact.message)
		.success(function(){
			console.log("objet contact"+contact);
		});
		
	}
	
	$scope.message = 'Contact us! JK. This is just a demo.';
});