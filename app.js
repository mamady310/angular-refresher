var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter','$http', function ($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $http.get('https://api.openbrewerydb.org/breweries?by_state=new_york')
       .success(function(result) {
        $scope.name = result;
        // console.log(result);
       })
       .error(function(data, status) {
           console.log(data);
       })

}]);