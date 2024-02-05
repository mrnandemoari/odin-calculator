const lastOperation = document.querySelector('.last__operation');
const currentOperation = document.querySelector('.current__operation');

let firstNumber = '0';
let operator = null;
let secondNumber = '';

// Operator functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b == 0 ? 'Undefined' : a / b);

const operate = (firstNumber, secondNumber, operator) => {
  let operationResult = null;

  switch (operator) {
    case 'add':
      return (operationResult = add(firstNumber, secondNumber));
      break;

    case 'subtract':
      return (operationResult = subtract(firstNumber, secondNumber));
      break;

    case 'multiply':
      return (operationResult = multiply(firstNumber, secondNumber));
      break;

    case 'divide':
      return (operationResult = divide(firstNumber, secondNumber));
      break;

    default:
      break;
  }

  return operationResult;
};
