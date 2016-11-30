angular.module('alcoApp')
.controller('LoginController', function ($scope) {
    $scope.login = function () {
        if(!$scope.identity || !$scope.pseudo){
            event.preventDefault();
            console.log($scope.identity);
            console.log($scope.pseudo);
            alert('Enter the valid name and e-mail, please');
        }
        else{}
    }
});