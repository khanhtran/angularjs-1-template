var appModule = angular.module('MyApp', []);
function MyCtrl($scope, $http, $window, $timeout) {
	$scope.data = {foo: "bar"};
}