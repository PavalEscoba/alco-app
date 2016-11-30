
var app = angular.module("alcoApp");

app.directive("tableOfAlco", function () {
    return{
        restrict: "E",
        templateUrl: "templates/table-of-alco.html"
    }
});