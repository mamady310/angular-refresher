var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.name = 'First controller';
    
}]);

myApp.controller('secondController',['$scope', function($scope){

    $scope.name = 'Second controller';
}]);