
var app = angular.module("alcoApp");

app.directive("information", function () {
    return{
        restrict: "E",
        templateUrl: "templates/information.html"
    }
});