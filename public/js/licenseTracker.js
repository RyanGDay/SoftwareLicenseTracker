(function() {

  var app = angular.module('LicenseTracker', ['ngRoute', 'firebase', 'licenseControllers']);

  app.config(['$routeProvider', function($routeProvider) {
  	$routeProvider.
  	when('/main', {
  		templateUrl: 'pages/main.html',
  		controller: 'indexController'
  	}).
  	otherwise({
  		redirectTo: '/main'
  	});
  }]);

}()); //end iffy
