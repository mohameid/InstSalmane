var app = angular.module('salmane');


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {  
    $routeProvider.
    when('/', {
    	controller:     'salmane.controlleur',
    	templateUrl : 'app/components/acceuil/acceuil.html'
    })
    .when('/acceuil', {
    	controller:     'acceuil.controlleur',
    	templateUrl : 'app/components/acceuil/acceuil.html'
    })
    .when('/contact', {
    	controller:     'contact.controlleur',
    	templateUrl : 'app/components/contact/contact.html'
    })
    .when('/actualite', {
    	controller:     'actualite.controlleur',
    	templateUrl : 'app/components/actualite/actualite.html'
    })
    .when('/inscription', {
    	controller:     'inscription.controlleur',
    	templateUrl : 'app/components/inscription/inscription.html'
    })
    ;
    
    $locationProvider.html5Mode({
    	  enabled: true,
    	  requireBase: false
    });
   
}]);

app.controller('salmane.controlleur', [salmaneController]);

function salmaneController(){	
	console.log("salmane Controlleur ");
}