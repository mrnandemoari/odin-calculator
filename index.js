let firstNumber = null;
let operator = null;
let secondNumber = null;

// Operator functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (firstNumber, secondNumber, operator) => {
  let operationResult = null;

  if (operator == 'add')
    return (operationResult = add(firstNumber, secondNumber));
  if (operator == 'subtract')
    return (operationResult = subtract(firstNumber, secondNumber));
  if (operator == 'multiply')
    return (operationResult = multiply(firstNumber, secondNumber));
  if (operator == 'divide')
    return (operationResult = divide(firstNumber, secondNumber));

  return operationResult;
};
