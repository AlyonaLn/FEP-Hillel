function createCalculator(el) {
    let numb = el;

    return {
        add: () => numb + 10,
        sub: () => numb - 20,
        get: () => numb,
        set: () => numb = 20,
        
    };
    
  }
  
  const calculator = createCalculator(100);
  
  calculator.add(10); // 110
  calculator.add(10); // 120
  calculator.sub(20); // 100
  
  calculator.set(20); // 20
  calculator.add(10); // 30
  calculator.add(10); // 40
  calculator.add('qwe'); // NaN и значение 40 не менять
  console.log(calculator.get()) // 40