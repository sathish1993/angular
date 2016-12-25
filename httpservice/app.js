(function () {
  'use strict';

  angular.module('MenuApp',[])
  .controller('MenuController',MenuController)
  .service('MenuService',MenuService)
  .constant('APIBasePath',"http://davids-restaurant.herokuapp.com")

  MenuController.$inject = ['MenuService'];
  function MenuController(MenuService) {
    var menu = this;
    var promise = MenuService.getMenuItems();
    promise.then(function (response) {
      console.log("response data", response.data);
      menu.menuItems = response.data;
    })
    .catch(function (error) {
      alert("error");
    })

    menu.getDetails = function (name) {
      var promise = MenuService.getDetailsCat(name);

      promise.then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    }

  };

  MenuService.$inject = ['$http','APIBasePath'];
  function MenuService($http,APIBasePath) {
    var service = this;

    service.getMenuItems = function () {
      var response = $http({
          method : "GET",
          url : (APIBasePath + "/categories.json")
      });
      return response;
    };

    service.getDetailsCat = function (name) {
      var response = $http({
            url : (APIBasePath + "/menu_items.json"),
            params : {
              category : name
            }
        });
          return response;
    };

  }

})();
