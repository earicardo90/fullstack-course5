(function () {
  'use strict';

  angular.module('NameCalculator', [])

    .controller('NameCalculatorController', function ($scope) {
      $scope.name = "";
      $scope.totalValue = 0;

      $scope.displayNumeric = function () {

        var totalNameValue = calculateNUmericForString($scope.name);

        $scope.totalValue = totalNameValue;

      }

      function calculateNUmericForString(string) {

        var totalStringValue = 0;

        for (var i = 0; i < string.length; i++) {

          totalStringValue += string.charCodeAt(i);
          
        }
        return totalStringValue;
      }

    });


})();
