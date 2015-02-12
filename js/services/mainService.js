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

this.addSkill = function(fred){
	var deferred = $q.defer();

	$http({
		method: 'PUT',
		url: 'http://localhost:9001/api/location',
		data: {location: fred}
	})

	return deferred.promise;
}

this.getSkillz = function() {
	var deferred = $q.defer();
	$http({
		method: 'GET',
		url: 'http://localhost:9001/api/skillz'
	}).then(function(res) {
		deferred.resolve(res.data);
	}, function(err) {
		deferred.reject(err);
	})
	return deferred.promise;
}

})