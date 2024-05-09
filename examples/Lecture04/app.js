(function () {
'use strict';


angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {

    $scope.name = "Ricardo"

    $scope.sayHello = function(){

return "Hello Coursera" + " " + $scope.name;
    }

});

})();
