const OPERATIONS = {'+': add, '-': sub, '*': mul, '/': div };
const OPERATION_LIST = Object.keys(OPERATIONS);

const mathematicalOperation = getOperation();
const numberCount = getNumberCount();
const numbers = getNumbers(numberCount);

const answer = getAnswer(numbers, mathematicalOperation);

showAnswer(numbers, mathematicalOperation, answer);



function getOperation() {
    let operation;

    do {
        operation = prompt(`Enter operation ${OPERATION_LIST.join(', ')}`);
    } while (!isOperationValid(operation))

    return operation;
}

function isOperationValid (mathematicalOperation) {
    return OPERATION_LIST.includes(mathematicalOperation);
}

function getNumberCount () {
    let count;

    do {
        count = prompt('Enter number count');
    } while (!isCountValid(count))

    return count;
}

function isCountValid(count) {
    return !isNaN(count) && count >=1 && count <=5;
}

function getNumbers(count) {
    const nums = [];

    for (let i = 1; i <= count; i++){
        nums.push(getNumber(i));
    }

    return nums;
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


function getAnswer(numbers, mathematicalOperation) {
    const mathFunc = OPERATIONS[mathematicalOperation];

    return numbers.reduce((acc, number) => mathFunc(acc, number), 0);
}

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function sub(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
function mul(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
function div(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function showAnswer (numbers, mathematicalOperation, answer) {
    const formula = numbers.join(`${mathematicalOperation}`);
    alert(`${formula} = ${answer}`);
}