#!/usr/bin/node

function factorial (num) {
  if (num == 0) {
    return 1;
  }

  return (num * factorial(num - 1));
}

// Example 1
console.log(factorial(5)); // Output: 120

// Example 2
console.log(factorial(0)); // Output: 1
