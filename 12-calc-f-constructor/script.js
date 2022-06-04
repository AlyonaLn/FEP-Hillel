const calc = new Calculator(100);

calc.add(10); // 110 записывает в this.base (в консоль ничего выводить не нужно)
calc.add(10); // 120 записывает в this.base (в консоль ничего выводить не нужно)
calc.sub(20); // 100 записывает в this.base (в консоль ничего выводить не нужно)
calc.set(20); // 20 записывает в this.base (в консоль ничего выводить не нужно)
calc.add(10); // 30 записывает в this.base (в консоль ничего выводить не нужно)
calc.add('qwe'); // игнорируем все что не число и значение 30 не меняется
calc.get(); // 30 возвращаем значение

function  Calculator(el) {

  this.el = el;

  this.isNumber = function (numb) {
    return !isNaN(numb);
  }

  this.add = function(numb) {
    if (this.isNumber(numb) ) {
      this.el += numb;
    }
   }

   this.sub = function(numb) {
    if (this.isNumber(numb) ) {
      this.el -= numb;
    }
   }

   this.set = function(numb) {
    if (this.isNumber(numb) ) {
      this.el = numb;
    }
   }

    this.get = function() {
      return this.el;
    }
  
  
}
