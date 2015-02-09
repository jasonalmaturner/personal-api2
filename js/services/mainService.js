var app = angular.module('personalApi');

app.service('mahService', function($http, $q){

this.getMahName = function(){	
	var deferred = $q.defer();
	$http({
		method: 'GET',
		url: 'http://localhost:9001/api/name'
	}).then(function(res){
		// console.log(res);
		deferred.resolve(res.data);
	}, function(err){
		deferred.reject(err);
	})
	return deferred.promise;
}

this.getLocation = function(){
	var deferred = $q.defer();
	$http({
		method: 'GET',
		url: 'http://localhost:9001/api/location'
	}).then(function(res){
		// console.log(res);
		deferred.resolve(res.data);
	}, function(err) {
		deferred.reject(err);
	});
	return deferred.promise;
}

})