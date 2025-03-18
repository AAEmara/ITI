# JavaScript Lab3

## Table of Contents
  - [Lab 3](#lab-3)
    - [Exercise 1](#exercise-1)
    - [Exercise 2 - MCQ: Truthy and Falsy Values](#exercise-2---mcq-truthy-and-falsy-values)
    - [Exercise 3 - Type Conversion (Implicit/Explicit)](#exercise-3---type-conversion-implicitexplicit)
    - [Exercise 4 - Prototype Inheritance](#exercise-4---prototype-inheritance)

## Lab 3
### Exercise 1
**Write a function `isTruthy(value)` that return `true` if the value is 
truthy and `false` otherwise.**

  - [Solution of Exercise 1](./1-truthy_or_falsy.js)

---

### Exercise 2 - MCQ: Truthy and Falsy Values

**Instructions:** Determine whether the following values are truthy or falsy.
  1. `Boolean("")`
     - [ ] A\) true
     - [ ] B\) false
  2. `Boolean(-0)`
     - [ ] A\) true
     - [ ] B\) false
  3. `Boolean("false")`
     - [ ] A\) true
     - [ ] B\) false
  4. What values are always falsy in JavaScript? (Select all that apply)
     - [ ] A\) 0
     - [ ] B\) "0"
     - [ ] C\) null
     - [ ] D\) undefined
  5. True or False: All Objects (e.g., `{}` or `new Object()`) are truthy.
     - [ ] A\) true
     - [ ] B\) false
  6. True or False: All arrays (e.g., `[]` or `new Array()`) are truthy.
     - [ ] A\) true
     - [ ] B\) false

  - [Solution for Exercise 2](./2-exercise_solution.md)
---

### Exercise 3 - Type Conversion (Implicit/Explicit)
**Instructions:** Answer questions about type conversion in JavaScript.

  1. What is the result of `"5" + 2`?
     - [ ] A\) 7
     - [ ] B\) "52"
     - [ ] C\) 52
  2. What does `5 - "2"` return?
     - [ ] A\) "52"
     - [ ] B\) "
  3. What is the result of `+"42"`?
     - [ ] A\) "42"
     - [ ] B\) 3
     - [ ] C\) NaN
  4. What does `Boolean("0")` return?
     - [ ] A\) true
     - [ ] B\) false
     - [ ] C\) 0
  5. What is the result `3 < 2 < 1`?
     - [ ] A\) true
     - [ ] B\) false
     - [ ] C\) TypeError

  - [Solution for Exercise 3](./3-exercise_solution.md)
---

### Exercise 4 - Prototype Inheritance
#### Objective
Create a class hierarchy representing different types of vehicles. Use both 
class-based inheritance (with extends and super) and prototype inheritance 
(by adding properties/methods to the prototype chain).
Then, demonstrate how the prototype chain works by accessing inherited 
properties and methods.

##### Requirements:
  1. Create a base class Vehicle with:
     - An own property type (e.g., "car", "truck") set in the constructor.
     - A prototype method `describe()` that logs a description of the vehicle.
  2. Create a subclass Car that extends Vehicle with:
     - An own property brand (e.g., "Toyota") set in the constructor.
     - A prototype method `honk()` that logs a honking sound.
  3. Create a subclass ElectricCar that extends Car with:
     - An own property `batteryRange` (e.g., 300) set in the constructor.
     - A prototype method `charge()` that logs a charging message.
  4. Add a prototype property maxSpeed to Vehicle prototype after defining the 
  classes.
  5. Create an instance of Electric Car and:
     - Call methods from all levels of the heirarchy (describe, honk, charge).
     - Access the maxSpeed prototype property.
     - Log the prototype chain to show inheritance.

  - [Solution for Exercise 4](./4-prototype.js)
