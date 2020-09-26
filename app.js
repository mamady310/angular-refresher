var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $log, $filter) {
    
   $scope.name = 'John';
   $scope.formattedname = $filter('uppercase')($scope.name);

   $log.info($scope.name);
   $log.info($scope.formattedname);
    
});

var searchPeople = function(firstName, $scope, height, age, occupation) {
    return 'Jane Doe';
}

console.log(angular.injector().annotate(searchPeople));