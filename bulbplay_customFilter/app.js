(function () {
  'use strict'; //this checks if variable is initialsed or not, coz if used like x=1, wihtout var, then x takes global scope and causes problem later

  angular.module('BulbApp',[])//module name and dependencies are the parameters
  .controller('BulbController', BulbController)
  .filter('state' , stateFilter)
  .filter('success' , successFilter);// this filter is added in html so no need to inject in bulbcontoller

  BulbController.$inject = ['$scope','stateFilter']; //stateFilter is obtained by using filter 'state' and angular js appended Filter to it, making stateFilter
  function BulbController($scope , stateFilter) {
    $scope.currentState = 0;
    $scope.state = "off";

    $scope.stateMessage = function () {
      return stateFilter($scope.state);
    };

    $scope.buttonClickCount = 0;
    $scope.switchBulb = function () {
        if($scope.currentState === 0){
          $scope.state = "on";
          $scope.currentState = 1;
          $scope.stateMessage = function () {
            return stateFilter($scope.state);
          };
          $scope.buttonClickCount++;
        }else{
          $scope.state = "off";
          $scope.currentState = 0;
          $scope.stateMessage = function () {
            return stateFilter($scope.state);
          };
          $scope.buttonClickCount++;
        }
      }
    }

    function stateFilter() {
      return function (input) {
        input = input.toUpperCase();
        return input;
      };
    }

    function successFilter(){
      return function (input, source) {
        return source;
      }
    }



})();
