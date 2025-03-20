# JavaScript Lab4

## Table of Contents
  - [Lab 4](#lab-4)
    - [Exercise 1](#exercise-1)

## Lab 4
### Exercise 1
#### Guess the Output
  1.
  ```javascript
  let x = 10;
  {
    let x = 20;
    console.log(x);
  }
  console.log(x)
  ```
    - [Solution of Problem 1](./1-solution.md)

  2.
  ```javascript
  const obj = { name: "Alice" };
  obj.name = "Bob";
  console.log(obj.name);
  ```
    - [Solution of Problem 2](./2-solution.md)
  3.
  ```javascript
  const x = 10;
  x = 20;
  console.log(x);
  ```
    - [Solution of Problem 3](./3-solution.md)

  4.
  ```javascript
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x);
  }
  console.log(x);
  ```
    - [Solution of Problem 4](./4-solution.md)

  5.
  ```javascript
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
  ```
    - [Solution of Problem 5](./5-solution.md)

  6.
  ```javascript
  function greet() {
    console.log(this.name);
  }
  const person = { name: "Bob" };
  const boundGreet = greet.bind(person);
  boundGreet();
  ```
    - [Solution of Problem 6](./6-solution.md)

  7.
  ```javascript
  function greet(a, b) {
    console.log(this.name, a, b);
  }
  const person = { name: "Bob" };
  greet.apply(person, ["Hello", "World"];
  ```
    - [Solution of Problem 7](./7-solution.md)

  8.
  ```javascript
  function greet() {
    console.log(this.name);
  }
  const person = { name: "Bob" };
  greet.call(person);
  ```
    - [Solution of Problem 8](./8-solution.md)

  9.
  ```javascript
  function greet() {
    console.log(this.name);
  }
  const person = { name: "Bob" };
  greet.call(person);
  ```
    - [Solution of Problem 9](./9-solution.md)

  10.
  ```javascript
  const obj = {
    name: "Alice",
    greet() {
      setTimeout (() => {
        console.log(this.name);
      }, 1000);
    },
  };
  obj.greet();
  ```
    - [Solution of Problem 10](./10-solution.md)

  11.
  ```javascript
  const obj = {
    name: "Alice",
    greet() {
      setTimeout(function () {
        console.log(this.name);
      }, 1000);
    },
  };
  obj.greet();
  ```

  12.
  ```javascript
  "use strict";
  function myFunction() {
    console.log(this);
  }
  myFunction();
  ```

  13.
  ```javascript
  function myFunction() {
    console.log(this);
  }
  myFunction();
  ```
