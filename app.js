var app = angular.module('html5boston', []);

app.controller('MainController', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);