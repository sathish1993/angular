(function () {
  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems',FoundItems);

  function FoundItems() {
    var ddo = {
        restrict : "A",
        templateUrl : 'foundItems.html',
        onRemove : '&'
    }
    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrow = this;
    narrow.getMenuItemsName = function (name) {
      if(name !== ""){
         narrow.found = MenuSearchService.getMatchedMenuItems(name);
       }else{
         narrow.found = [];
       }
    }
    narrow.onRemove = function (itemIndex) {
        narrow.found.splice(itemIndex,1);
    };
    narrow.nullCheck = function () {
      if(narrow.found!= undefined && narrow.found.length === 0){
        return true;
      }
    }
  };

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;
    var foundItemsCollections = [];
    var check = false;
    service.getMatchedMenuItems = function (ItemName) {
      var response = $http({
        method : 'GET',
        url : "https://davids-restaurant.herokuapp.com/menu_items.json",
      })
      response.then(function (response) {
        for (var i=0; i< response.data.menu_items.length; i++){
          if(response.data.menu_items[i].description.toUpperCase().includes(ItemName.toUpperCase())){
              foundItemsCollections.push(response.data.menu_items[i]);
              check = true;
          }
        }
        console.log("checking",check);
        if(!check){
          foundItemsCollections = [];
        }
        check = false;
      })
      .catch(function (error){
          console.error(error);
      })
      console.log("foundItemsCollections",foundItemsCollections.length);
      return foundItemsCollections;
    }
  }
})();
