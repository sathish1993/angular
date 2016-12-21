(function () {
  'use strict';

  angular.module('ShoppingCartApp',[])
  .controller('ShoppingCartController',ShoppingCartController)
  .controller('SubShoppingCartController',SubShoppingCartController);

  var shoppingItemsList1 = ["Green Olives","Cheese","Donuts"];
  var shoppingItemsList2 = [
    {
      name : "Cookie",
      quantity : "2",
    },
    {
      name : "Milk",
      quantity : "3",
    },
    {
      name : "Lays",
      quantity : "1",
    }
  ];

  ShoppingCartController.$inject = ['$scope'];
  function ShoppingCartController($scope) {
    $scope.list1 = shoppingItemsList1;
    $scope.list2 = shoppingItemsList2;
    var shop = this;
    shop.value = "list1";
    console.log("parent scope :", $scope);
    $scope.addItems = function () {
      var newItem = {
        name : $scope.newItem,
        quantity : $scope.newItemQuantity
      };
      $scope.list2.push(newItem);
    };
  }

  SubShoppingCartController.$inject = ['$scope'];
  function SubShoppingCartController($scope) {
    var subShop = this;
    subShop.value = "list2";
    console.log("child scope :", $scope);
  }
})();
