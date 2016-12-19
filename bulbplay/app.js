(function () {
  'use strict'; //this checks if variable is initialsed or not, coz if used like x=1, wihtout var, then x takes global scope and causes problem later

  angular.module('BulbApp',[])//module name and dependencies are the parameters
  .controller('BulbController', BulbController)

  BulbController.$injector = ['$scope'];
  function BulbController($scope) {
    $scope.currentState = 0;
    $scope.state = "off";
    $scope.switchBulb = function () {
        if($scope.currentState === 0){
          $scope.state = "on";
          $scope.currentState = 1;
        }else{
          $scope.state = "off";
          $scope.currentState = 0;
        }
      }
    }
})();
