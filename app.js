var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {

    $routeProvider

    .when('/', {
        //connects the template to controller
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'

    })
});

myApp.controller('mainController', ['$scope','$log', function($scope,$log) {

    
}]);
