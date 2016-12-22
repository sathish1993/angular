!function(){"use strict";function t(t){var e=this;e.lengthCheck=!1,e.toBuyItems=t.gettoBuyItems(),
  e.buyItem=function(n,i,o){t.buyItem(i,n,o),0==e.toBuyItems.length&&(e.lengthCheck=!0)}}
  function e(t){var e=this;e.boughtItems=t.getItems()}
  function n(){var t=this,e=[{name:"Milk",quantity:"10"},{name:"Cookie",quantity:"5"},{name:"Oreo",quantity:"15"},
  {name:"Maaza",quantity:"3"},{name:"Lays",quantity:5}],n=[];t.buyItem=function(t,i,o)
  {var u={name:t,quantity:i};
  n.push(u),e.splice(o,1)},t.gettoBuyItems=function(){return e},t.getItems=function(){return n}}
  angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",e).
  service("ShoppingListCheckOffService",n),t.$inject=["ShoppingListCheckOffService"],e.$inject=["ShoppingListCheckOffService"]}();
