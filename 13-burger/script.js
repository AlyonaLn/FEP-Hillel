const hamburger = new Hamburger(Hamburger.SIZE_LARGE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_SPICES);
hamburger.addTopping(Hamburger.TOPPING_SALAT);


console.log(`Price with sauce: ` + hamburger.getPrice());
console.log(`Callories with sauce: ` + hamburger.getCallories());


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

function Hamburger(size) {
  this.price = size.price;
  this.callorie = size.calorie;
  
}


Hamburger.prototape.addTopping = function(topping) {
  this.price +=topping.price;
  this.callorie += topping.callorie;
}


Hamburger.prototape.getPrice = function() {
  return this.price;
}

Hamburger.prototape.getCallories = function() {
  return this.callorie;
}

