(function () {
  'use strict';

  angular.module('NameCalculator',[])

  .controller('NameCalculatorController',function ($scope) {
    $scope.name = "";
    $scope.totalValue = 0;
    $scope.displayNumeric = function () {
      var totalNameValue = calculateNumericValue($scope.name); //get total name value
      $scope.totalValue = totalNameValue;
    }

    function calculateNumericValue(string) {
        var totalCount = 0;
        for (var i = 0; i < string.length; i++ ){
            totalCount += string.charCodeAt(i);
        }

        return totalCount;
    }

  })

})();
