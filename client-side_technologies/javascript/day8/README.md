# JavaScript Lab7

## Table of Contents
  - [Lab 7](#lab-7)
    - [Exercise 1](#exercise-1)
    - [Exercise 2](#exercise-2)
    - [Exercise 3: Guess the output](#exercise-3-guess-the-output)
    - [Exercise 4](#exercise-4)
    - [Exercise 5](#exercise-5)
    - [Exercise 6: Implement a Web Worker](#exercise-6-implement-a-web-worker)

## Lab 7
### Exercise 1
  - What is the difference between concurrency and parallelism in JavaScript?
    - [ ] A\) Concurrency uses multiple threads, while parallelism uses a 
    single thread.
    - [ ] B\) Concurrency handles tasks on a single thread, while parallelism 
    uses multiple threads.
    - [ ] C\) Both concurrency and parallelism are the same.
    - [ ] D\) Concurrency is only possible with Web Workers.

  - [Solution 1 of Problem 1](./1-solution.md)

### Exercise 2
  - Which of the following is NOT an I/O-bound operation in JavaScript?
    - [ ] A\) `setTimeout`
    - [ ] B\) `fetch()` API call
    - [ ] C\) A `for` loop calculating prime numbers
    - [ ] D\) Reading a file using `fs.readFile`

  - [Solution of Problem 2](./2-solution.md)

### Exercise 3: Guess the output
  ```javascript
  setTimeout(() => {
    console.log("One");
  }, 1000);
  setTimeout(() => {
    console.log("Two");
  }, 0);
  console.log("Three");
  ```

  - [Solution of Problem 3](./3-solution.md)

### Exercise 4: Guess the output
  ```javascript
  setTimeout(() => console.log("A"), 0);
  Promise.resolve().then(() => console.log("B"));
  console.log("C");
  ```

  - [Solution of Problem 4](./4-solution.md)

### Exercise 5
  ```javascript
  function fetchDataCallback(url, callback) {
    setTimeout(() => {
      const data = { url, status: 200 };
      callback(null, data);
    }, 1000);
  }

  fetchDataCallback("https://api.example.com", (err, data) => {
    if (err) console.error(err);
    else console.log("Callback Result:", data);
  });
  ```

  - [Solution of Problem 5](./5-solution.md)

### Exercise 6: Implement a Web Worker
  - Create a simple Web Worker (worker.js) that calculates the sum of numbers 
  up to N and post the result to the main thread.

  - [Solution of Problem 6](./6-solution.md)
