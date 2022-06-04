import Hamburger from "Hamburger.js";


const hamburger = new Hamburger(Hamburger.SIZE_LARGE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_SALAT);


console.log(`Price with sauce: ` + hamburger.getPrice());
console.log(`Callories with sauce: ` + hamburger.getCallories());
