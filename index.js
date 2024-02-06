// Selecting elements
const displayElement = document.querySelector('.display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const decimalButton = document.querySelector('.decimal');
const deleteButton = document.querySelector('.delete');

// Variables
let firstNumber = null;
let operator = null;
let secondNumber = null;

// Display function
const updateDisplay = (displayValue) => {
  displayElement.textContent = displayValue.toString();
};

// Operator functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) =>
  b === 0 ? 'Undefined: Cannot divide by zero.' : a / b;

const operate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return add(firstNumber, secondNumber);

    case '-':
      return subtract(firstNumber, secondNumber);

    case '*':
      return multiply(firstNumber, secondNumber);

    case '/':
      return divide(firstNumber, secondNumber);

    default:
      return 'Invalid operator.';
  }
};

const roundToDecimal = (number, decimalPlaces) => {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(number * factor) / factor;
};

const handleDigitButton = (digit) => {
  if (displayElement.textContent === '0' || operatorPressed) {
    updateDisplay(digit);
    operatorPressed = false;
  } else {
    updateDisplay(displayElement.textContent + digit);
  }
};

const handleOperatorButton = (op) => {
  if (firstNumber !== null && !operatorPressed) {
    secondNumber = parseFloat(displayElement.textContent);
    const result = operate(firstNumber, secondNumber, operator);
    const roundedResult = roundToDecimal(result, 4);

    updateDisplay(roundedResult);

    firstNumber = roundedResult;
    operator = op;
    secondNumber = null;
    operatorPressed = true;
  } else {
    firstNumber = parseFloat(displayElement.textContent);
    operator = op;
    operatorPressed = true;

    updateDisplay('0');
  }
};

const handleEqualsButton = () => {
  if (operator !== null && secondNumber === null) {
    secondNumber = parseFloat(displayElement.textContent);
    const result = operate(firstNumber, secondNumber, operator);
    const roundedResult = roundToDecimal(result, 4);

    updateDisplay(roundedResult);

    firstNumber = roundedResult;
    operator = null;
    secondNumber = null;
  }
};

const handleClearButton = () => {
  firstNumber = null;
  operator = null;
  secondNumber = null;

  updateDisplay('0');
};

const handleDecimalButton = () => {
  if (!displayElement.textContent.includes('.')) {
    updateDisplay(displayElement.textContent + '.');
  }
};

const handleDeleteButton = () => {
  let currentValue = displayElement.textContent;
  currentValue = currentValue.slice(0, -1);

  updateDisplay(currentValue || '0');
};

// Event listeners
digitButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const digit = button.textContent;
    handleDigitButton(digit);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const operator = button.textContent;
    handleOperatorButton(operator);
  });
});

equalsButton.addEventListener('click', handleEqualsButton);

clearButton.addEventListener('click', handleClearButton);

decimalButton.addEventListener('click', () => {
  handleDecimalButton();
});

deleteButton.addEventListener('click', () => {
  handleDeleteButton();
});

// Event listener for keyboard
document.addEventListener('keydown', (event) => {
  const key = event.key;

  // Numeric keys
  if (!isNaN(parseInt(key))) {
    handleDigitButton(key);
  }

  // Operator keys
  if (['+', '-', '*', '/'].includes(key)) {
    handleOperatorButton(key);
  }

  // Equals key
  if (key === 'Enter') {
    handleEqualsButton();
  }

  // Delete key
  if (key === 'Backspace') {
    handleDeleteButton();
  }

  // Decimal key
  if (key === '.' || key === ',') {
    handleDecimalButton();
  }

  // Clear key
  if (key === 'Delete' || key === 'Del') {
    handleClearButton();
  }
});
