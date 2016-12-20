(function () {
  'use strict'; //this checks if variable is initialsed or not, coz if used like x=1, wihtout var, then x takes global scope and causes problem later

  angular.module('BulbApp',[])//module name and dependencies are the parameters
  .controller('BulbController', BulbController)

  BulbController.$injector = ['$scope','$filter'];
  function BulbController($scope,$filter) {
    $scope.currentState = 0;
    $scope.state = "off";
    $scope.stateMessage = $filter("uppercase")($scope.state);
    $scope.buttonClickCount = 0;
    $scope.switchBulb = function () {
        if($scope.currentState === 0){
          $scope.state = "on";
          $scope.currentState = 1;
          $scope.stateMessage = $filter("uppercase")($scope.state);
          $scope.buttonClickCount++;
        }else{
          $scope.state = "off";
          $scope.currentState = 0;
          $scope.stateMessage = $filter("uppercase")($scope.state);
          $scope.buttonClickCount++;
        }
      }
    }
})();
