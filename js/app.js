var app = angular.module('personalApi', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'js/views/main/mainView.html',
		controller: 'mainCtrl',
		resolve: {
			mahName: function(mahService) {
				return mahService.getMahName();
			},
			location: function(mahService) {
				return mahService.getLocation();
			}
		}
	})
	.when('/me', {
		templateUrl: 'js/views/me/me.html',
		controller: 'meCtrl',
		resolve: {
			name: function(mahService) {
				return mahService.getMahName();
			}
		}
	})

})