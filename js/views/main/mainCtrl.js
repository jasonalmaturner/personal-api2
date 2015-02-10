var app = angular.module('personalApi');

app.controller('mainCtrl', function($scope, mahService, mahName, location){

$scope.name = mahName;
$scope.location = location;

$scope.sendSkill = function(){
	mahService.addSkill($scope.skill);
	$scope.getSkillz();
}

$scope.getSkillz = function() {
	mahService.getSkillz().then(function(res){
		$scope.skillz = res;
	}, function(err){
		console.log(err);
	});
};

$scope.getSkillz();

})