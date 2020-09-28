var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    
    var brewery = new XMLHttpRequest();
    brewery.onreadystatechange = function () {
      
        $scope.$apply(function() {
            if (brewery.readyState == 4 && brewery.status == 200) {
                $scope.drinks = JSON.parse(brewery.responseText);
            }
        })
   
    };

    brewery.open("GET", "https://api.openbrewerydb.org/breweries?by_state=new_york", true);
    brewery.send();
    
    
    
}]);
