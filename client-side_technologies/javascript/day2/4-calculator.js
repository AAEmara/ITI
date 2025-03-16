#!/usr/bin/node

function calculator (num1, num2, operator) {
  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    throw new Error('Operator is not valid!');
  }

  return (result);
}

// Example 1
try {
  console.log(calculator(5, 3, '+'));
} catch (error) {
  console.log(error);
}
