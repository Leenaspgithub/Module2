(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyController', ToBuyController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);



ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getItems();
showList.cnt=5;
  showList.addItem = function (itemIndex) {
    try{
    ShoppingListCheckOffService.addItem(itemIndex);
    showList.cnt=showList.cnt-1;
  }catch(error){
    showList.errorMessage = error.message;
  }
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemAdder = this;
  itemAdder.cnt2=0;

  itemAdder.items2 = ShoppingListCheckOffService.getItems2();
  
}

function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var items = [
    {
      name: "Burgers",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Pizzas",
      quantity: "5"
    },
    {
      name: "Chocolates",
      quantity: "5"
    }
  ];

  var items2 = [];

  service.addItem = function (itemIdex) {
    var item = {
      name: items[itemIdex].name,
      quantity: items[itemIdex].quantity
    };
    items2.push(item);
     items.splice(itemIdex, 1);
  };

  service.getItems = function () {

    return items;

  };

  service.getItems2 = function () {

    return items2;

  };


  };


})();
