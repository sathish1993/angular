(function () {
  'use strict';

  angular.module('ShoppingApp',[])
  .controller('AddItemController', AddItemController)
  .controller('DisplayItemController', DisplayItemController)
  .service('ShoppingService', ShoppingService)

  AddItemController.$inject = ['ShoppingService'];
  function AddItemController(ShoppingService) {
    var item = this;
    item.itemName = "";
    item.itemQuantity = "";
    item.addItem = function () {
        ShoppingService.addItem(item.itemName,item.itemQuantity);
    }
  };

  DisplayItemController.$inject = ['ShoppingService'];
  function DisplayItemController(ShoppingService) {
    var display = this;
    display.items = ShoppingService.displayAllItems();
    display.removeItem = function (index) {
        ShoppingService.removeItem(index);
    }
  };

  function ShoppingService() {
    var service = this;
    var itemsCollection = [];
    service.addItem = function (itemName , itemQuantity) {
        var newItem = { name : itemName , quantity : itemQuantity};
        itemsCollection.push(newItem);
    };

    service.displayAllItems = function () {
      return itemsCollection;
    };

    service.removeItem = function (index) {
      itemsCollection.splice(index , 1);
    };
  };

})();
