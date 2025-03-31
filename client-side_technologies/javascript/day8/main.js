#!/usr/bin/node

console.log("Main thread: Starting worker...");

const worker = new Worker("worker.js");

worker.onmessage = (event) => {
  console.log(`Worker thread says: ${event.data}`);
};

console.log("Main thread: Continuing execution...");
