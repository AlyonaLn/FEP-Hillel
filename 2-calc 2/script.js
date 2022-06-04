getAnswer();

function getAnswer() {
    let firstNumber = Number (prompt('Enter first number'));

    if (isNaN(firstNumber)) {
        console.error('Wrong number');
        return;
    }

    let secondNumber = Number (prompt('Enter second number'));
    if (isNaN(secondNumber)) {
        console.error('Wrong number');
        return;
    }
    
    let mathematicalOperation = prompt('Enter mathematical Operation (+,-,*,/)');

    if ((mathematicalOperation) ==='+') {
        console.log( Number(firstNumber) + Number(secondNumber));
    }

     if ((mathematicalOperation) ==='-') {
        console.log(Number(firstNumber) - Number(secondNumber));
    }
    

     if ((mathematicalOperation) ==='/') {
        console.log(Number(firstNumber) / Number(secondNumber));
    }
   

     if ((mathematicalOperation) ==='*') {
        console.log(Number(firstNumber) * Number(secondNumber));
    }   
}
