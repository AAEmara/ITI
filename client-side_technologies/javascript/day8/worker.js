#!/usr/bin/node

function sumWorker(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  return sum;
}

const result = sumWorker(1e9);

postMessage(result);
