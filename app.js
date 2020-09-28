var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $scope.rules = [
        {rulename: "must be 5 characters"},
        {rulename: "must have special characters"},
        {rulename: "must be cool"}
    ]

    $scope.alertClick = function() {
        alert("Clicked");
    }
    
}]);
