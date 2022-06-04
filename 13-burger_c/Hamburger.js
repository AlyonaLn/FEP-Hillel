`use strict`;

function Hamburger(size) {
  this.price = size.price;
  this.callorie = size.calorie;
  
};

Hamburger.SIZE_SMALL = {
  price: 50,
  callorie: 20,
};

Hamburger.SIZE_MIDDLE = {
  price: 75,
  callorie: 30,
  };

Hamburger.SIZE_LARGE = {
  price: 100,
  callorie: 40,
  };

Hamburger.TOPPING_CHEESE = {
  price: 10,
  callorie: 20,
};

Hamburger.TOPPING_SALAT = {
  price: 20,
  callorie: 5,
};

Hamburger.TOPPING_POTATO = {
  price: 15,
  callorie: 10,
};

Hamburger.TOPPING_SPICES = {
  price: 15,
  callorie: 0,
};

Hamburger.TOPPING_MAYO = {
  price: 20,
  callorie: 5,
};

Hamburger.prototape.addTopping = function(topping) {
  this.price +=topping.price;
  this.callorie += topping.callorie;
};


Hamburger.prototape.getPrice = function() {
  return this.price;
};

Hamburger.prototape.getCallories = function() {
  return this.callorie;
};


export default Hamburger;