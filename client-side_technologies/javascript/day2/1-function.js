#!/usr/bin/node

function validateAge (age) {
  if (typeof age !== "number") {
    throw new Error("Age must be a number.");
  }
  console.log(true);
}

// Example 1
try {
  validateAge(25);
} catch (error) {
  console.log(error);
}

// Example 2
try {
  validateAge('abc');
} catch (error) {
  console.log(error);
}
