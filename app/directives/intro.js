/**
 * Created by Pablo on 25.11.2016.
 */
var app = angular.module("alcoApp");

app.directive("intro", function () {
    return{
        restrict: "E",
        templateUrl: "templates/intro.html"
    }
});