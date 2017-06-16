var app = angular.module('salmane');


app.config(['$routeProvider', '$locationProvider','$provide', function($routeProvider, $locationProvider,$provide) {
	$provide.decorator('$sniffer', function($delegate) {
		  $delegate.history = false;
		  return $delegate;
	});
	
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
    $locationProvider
    .html5Mode(true)
    .hashPrefix("");
    
//    $locationProvider.hashPrefix('');
    
//    $locationProvider.html5Mode({
//    	  enabled: true,
//    	  requireBase: false
//    });
   
}]);

app.controller('salmane.controlleur', [salmaneController]);

function salmaneController(){	
	console.log("salmane Controlleur ");
	
	
	function initializeGoogleApi() {
	    var input = document.getElementById('CityInput');
	    var options = {
	        types: ['(cities)']
	    };
	    var autocomplete = new google.maps.places.Autocomplete(input, options);
	}
}