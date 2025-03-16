# JavaScript Lab1

## Table of Contents
  - Lab 1
    - [Exercise 1](#exercise-1)
    - [Exercise 2](#exercise-2)
    - [Exercise 3](#exercise-3)
    - [Exercise 4](#exercise-4)
    - [Note on Factorials](#note-on-factorials)

## Lab 1
### Exercise 1
  1. Build a function that validates user input (e.g., age) and throws custom 
  errors for invalid values.
     - Ex:  
    ```javascript
    console.log(validateAge(25)); // Output: true (Valid age)
    console.log(validateAge('abc')); // Throws Error: Age must be a number
    ```
  - [Exercise 1 Solution](./1-function.js)

---

### Exercise 2
  2. Tell the output of this operation, mentioning the reason for your answer 
  (precedence orders)  
     ```javascript
     let number = (10 + 5 * 2 - 8 / 4) ** 2 / 2;
     ```
     - The output is **162**.
  - [Exercise 2 Solution](./2-operation.js)

---

### Exercise 3
  3. Build a program that calculates the factorial of a number 
  (\* factorial meaning is defined below)  
     - Ex:  
     ```javascript
     console.log(factorial(5)); // Output: 120
     console.log(factorial(0)); // Output: 1
     ```
  - [Exercise 3 Solution](./3-factorial.js)

---

### Exercise 4
  4. Create a calculator that takes two numbers and an operator (+, -, \*, /) 
  as input and performs the corresponding operation.
     - Ex:  
     ```js
     console.log(calculator(5, 3, '+'); // Output: 8
     ```
  - [Exercise 4 Solution](./4-calculator.js)

---

### Note on Factorials
The **factorial** of a number n (denoted as n!) is the product of all positive 
integers from 1 to n. It is defined as:

5! = 5 x 4 x 3 x 2 x 1 = 120
3! = 3 x 2 x 1 = 6
1! = 1
0! = 1 (by definition)
