(function () {
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buy = this;
    buy.lengthCheck = false;
    buy.toBuyItems = ShoppingListCheckOffService.gettoBuyItems();
    buy.buyItem = function (item_Quantity,item_Name,index) {
      ShoppingListCheckOffService.buyItem(item_Name,item_Quantity,index);
      if(buy.toBuyItems.length == 0){
        buy.lengthCheck = true;
      }
    }
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.lengthCheck = true;
    bought.boughtItems = ShoppingListCheckOffService.getItems();
  };

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
      {
        name : 'Milk',
        quantity : '10'
      },
      {
        name : 'Cookie',
        quantity : '5'
      },
      {
        name : 'Oreo',
        quantity : '15'
      },
      {
        name : 'Maaza',
        quantity : '3'
      },
      {
        name : 'Lays',
        quantity : 5
      }];

    var itemsBought = [];
    service.buyItem = function (item_Name,item_Quantity,index) {
      var newItem = { name : item_Name, quantity : item_Quantity};
      itemsBought.push(newItem);
      itemsToBuy.splice(index,1);
    }

    service.gettoBuyItems = function () {
      return itemsToBuy;
    }

    service.getItems = function () {
      return itemsBought;
    }

  }
})();
