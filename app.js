var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.name = 'Mamady';

    $timeout(function() {
    $scope.name = 'Everybody';
    }, 3000)
    
}]);
