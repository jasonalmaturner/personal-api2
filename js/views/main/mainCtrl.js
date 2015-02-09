var app = angular.module('personalApi');

app.controller('mainCtrl', function($scope, mahService, mahName, location){

$scope.name = mahName;
$scope.location = location;

})