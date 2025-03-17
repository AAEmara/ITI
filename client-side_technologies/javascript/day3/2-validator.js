#!/usr/bin/node

function validateObject(obj, schema) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      // Traverse the nested object till its last key-value pair
      if (!validateObject(obj[key], schema[key])) {
        return false;
      }
    } else {
      // Checks the main object key-value pair
      if (typeof obj[key] !== schema[key]) {
        return false;
      }
    }
  }
  return true;
}

// Example
const schema = {
  name: "string",
  age: "number",
  isStudent: "boolean",
  address: {
    city: "string",
    zip: "number",
  },
};

const obj = {
  name: "John",
  age: 25,
  isStudent: true,
  address: {
    city: "New York",
    zip: 10001,
  },
};

console.log(validateObject(obj, schema)); // Output: true
