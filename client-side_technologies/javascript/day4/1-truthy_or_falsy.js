#!/usr/bin/node

function isTruthy(value) {
  return Boolean(value);
}

// Examples on falsy values
console.log("*** Examples on falsy values ***");
console.log("================================");
console.log(`false is truthy? -> ${isTruthy(false)}`);
console.log(`0 is truthy? -> ${isTruthy(0)}`);
console.log(`"" is truthy? -> ${isTruthy("")}`);
console.log(`null is truthy? -> ${isTruthy(null)}`);
console.log(`undefined is truthy? -> ${isTruthy(undefined)}\n`);

// Examples on truthy values
console.log("*** Examples on truthy values ***");
console.log("================================");
console.log(`true is truthy? -> ${isTruthy(true)}`);
console.log(`1 is truthy? -> ${isTruthy(1)}`);
console.log(`99 is truthy? -> ${isTruthy(99)}`);
console.log(`"hey" is truthy? -> ${isTruthy("hey")}\n`);
