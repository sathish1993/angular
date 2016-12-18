(function () {
  'use strict'; //this checks if variable is initialsed or not, coz if used like x=1, wihtout var, then x takes global scope and causes problem later

  angular.module('myFirstApp',[])//module name and dependencies are the parameters

  .controller('myFirstController', function ($scope){
    $scope.name = "Sathish"
    $scope.sayHello = function functionName() {
      return "Dude we are working on Angular!!"
    };
});

})();
