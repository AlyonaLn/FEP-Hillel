const mathematicalOperation = getOperation();
const firstNumber = getNumber('first');
const secondNumber = getNumber('second');
const answer = getAnswer(firstNumber, secondNumber, mathematicalOperation);

showAnswer(firstNumber, secondNumber, mathematicalOperation, answer);

function showAnswer (firstNumber, secondNumber, mathematicalOperation, answer) {
    alert(`${firstNumber} ${mathematicalOperation} ${secondNumber} = ${answer}`);
}

function getOperation() {
    let operation;
    do {
        operation = prompt('Enter mathematical operation (+, -, *, /)');
    } while (!isOperationValid(operation))

    return operation;
}

function isOperationValid (operation) {
    return operation === '+' || operation === '-' || operation === '*' || operation === '/';
}


function getNumber(numberName) {
    let number;

    do {
        number = Number(prompt(`Enter number ${numberName}`));
    } while (!isNumberValid(number))
    return number;

}

function isNumberValid(number) {
    return !isNaN(number);
}


function getAnswer(firstNumber, secondNumber, mathematicalOperation) {
    switch(mathematicalOperation) {
        case '+': return firstNumber + secondNumber; break;
        case '-': return firstNumber - secondNumber; break;
        case '*': return firstNumber * secondNumber; break;
        case '/': return firstNumber / secondNumber; break;
        default: return 'Wrong operation'
    }
}