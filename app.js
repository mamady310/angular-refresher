var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    
    var breweryrequest = new XMLHttpRequest();
    brewereyrequest.onreadystatechange = function () {
        if (breweryrequestrquest.readyState == 4 && brewertrequest.status == 200) {
            $scope.drinks = JSON.parse(breweryrequest.responseText);
        }
    };

    breweryrequest.open("GET", "https://api.openbrewerydb.org/breweries?by_state=new_york");
    breweryrequest.send();
    
    
    
}]);
