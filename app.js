const angularApp = angular.module('angularApp', []);

angularApp.controller('mainController', ['$scope', function ($scope) {


}]);

const searchPeople = function (firstName, lastName, height, age, occupation){
    return 'jane Doe';
}

console.log(angular.injector().annotate(searchPeople));