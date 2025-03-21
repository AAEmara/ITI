# JavaScript Lab5

## Table of Contents
  - [Lab 5](#lab-5)
    - [Exercise 1](#exercise-1)

## Lab 5
### Exercise 1
#### Guess the Output
  1.
  ```javascript
  const arr1 = [1, [2, 3]];
  const arr2 = JSON.parse(JSON.stringify(arr1));
  arr2[1][0] = 4;
  console.log(arr1[1][0]);
  ```
  - [Solution of Problem 1](./1-solution.md)

  2.
  ```javascript
  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { ...obj1 };
  obj2.b.c = 3;
  console.log(obj1.b.c);
  ```
  - [Solution of Problem 2](./2-solution.md)

  3.
  ```javascript
  let z = undefined;
  z ??= 40;
  console.log(z);
  ```
  - [Solution of Problem 3](./3-solution.md)

  4.
  ```javascript
  let y = null;
  y ||= 30;
  console.log(y);
  ```
  - [Solution of Problem 4](./4-solution.md)

  5.
  ```javascript
  let x = 10;
  x &&= 20;
  console.log(x);
  ```
  - [Solution of Problem 5](./5-solution.md)

  6.
  ```javascript
  const value = 0;
  console.log(value ?? 10);
  console.log(value || 10);
  ```
  - [Solution of Problem 6](./6-solution.md)

  7.
  ```javascript
  const value = null;
  console.log(value ?? "Default");
  ```
  - [Solution of Problem 7](./7-solution.md)

  8.
  ```javascript
  const obj = { a: { b: { c: 10 } } };
  console.log(obj.a?.b?.c);
  console.log(obj.x?.y?.z);
  ```
  - [Solution of Problem 8](./8-solution.md)

  9.
  ```javascript
  const user = { name: "Alice", address: { city: "Wonderland" } };
  console.log(user.address?.city);
  console.log(user.contact?.phone);
  ```
  - [Solution of Problem 9](./9-solution.md)

  10.
  ```javascript
  function greet(name = "Guest") {
    return `Hello, ${name}!`;
  }
  console.log(greet());
  console.log(greet("Alice"));
  ```
  - [Solution of Problem 10](./10-solution.md)

  11.
  ```javascript
  function sum(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
  }
  console.log(sum(1, 2, 3, 4));
  ```
  - [Solution of Problem 11](./11-solution.md)

  12.
  ```javascript
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const combined = [...arr1, ...arr2];
  console.log(combined);
  ```
  - [Solution of Problem 12](./12-solution.md)

  13.
  ```javascript
  const obj = { a: 1, b: 2 };
  const { a = 10, c = 30 } = obj;
  console.log(a, c);
  ```
  - [Solution of Problem 13](./13-solution.md)

  14.
  ```javascript
  const nums = [1, 2, 3];
  const [first, ...rest] = nums;
  console.log(first, rest);
  ```
  - [Solution of Problem 14](./14-solution.md)

  15.
  ```javascript
  const { x, y } = { x: 10, y: 20, z: 30 };
  console.log(x, y);
  ```
  - [Solution of Problem 15](./15-solution.md)

  16.
  ```javascript
  const [a, b] = [1, 2, 3];
  console.log(a, b);
  ```
  - [Solution of Problem 16](./16-solution.md)

  17.
  ```javascript
  const name = "Bob";
  const age = 30;
  const user = { name, age };
  console.log(user);
  ```
  - [Solution of Problem 17](./17-solution.md)

  18.
  ```javascript
  const a = 10;
  const b = 20;
  console.log(`Sum: ${a + b}`);
  ```
  - [Solution of Problem 18](./18-solution.md)
