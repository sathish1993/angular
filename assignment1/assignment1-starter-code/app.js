(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController)

  LunchCheckController.$injector = ['$scope'];
  function LunchCheckController($scope) {
    $scope.items = "";
    $scope.itemCount = 0;
    $scope.message = "";
    $scope.color = "";
    $scope.responseMessage = function () {
      if($scope.items.length == 0){
            $scope.message = "Please enter data first"
            $scope.color = "red";
      }else{
            var count = 0;
            var itemsSplit = $scope.items.split(",");
            for(var i=0;i<itemsSplit.length;i++){
              if(itemsSplit[i] !== ""){
                count++;
              }
            }
            $scope.itemCount = count;
            if($scope.itemCount <= 3 && $scope.itemCount >= 1){
              $scope.message = "Enjoy!";
              $scope.color = "green";
            }else{
              $scope.color = "green";
              $scope.message = "Too much!";
            }
      }
    }
  }
})();
