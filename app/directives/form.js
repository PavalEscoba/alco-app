/**
 * Created by Pablo on 25.11.2016.
 */
/**
 * Created by Pablo on 25.11.2016.
 */
var app = angular.module("alcoApp");

app.directive("form", function () {
    return{
        restrict: "E",
        templateUrl: "templates/form.html",
        scope: true
    }
});