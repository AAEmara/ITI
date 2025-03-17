# JavaScript Lab2 

## Table of Contents
  - [Lab 2](#lab-2)
    - [Exercise 1: Employee Management System](#exercise-1-employee-management-system)
    - [Exercise 2: Type Checking and Validation](#exercise-2-type-checking-and-validation)

---

## Lab 2
### Exercise 1: Employee Management System
#### Task Description:
You are building a system to manage employees in a company. There are 
different types of employees, such as `Manager`, `Developer`, and `Intern`.
Each type of employee has unique properties and behaviours, but they all 
share some common characteristics.

**Requirements:**  
  1. **Encapsulation:**    
     - Use private properties to hide sensitive data (e.g., salary).  
     - Provide public getter and setter methods to access and modify private 
    properties.
  2. **Inheritance:**  
     - Create a base class `Employee` with common properties and methods.  
     - Extend the `Employee` class to create `Manager`, `Developer`, and
   `Intern` classes.
  3. **Polymorphism:**  
     - Override methods in the child classes to provide specific 
    implementations.  
     - Use a common interface (e.g., work()) to demonstrate polymorphic 
    behaviour.

  - [Solution of Exercise 1](./1-oop.js)

---

### Exercise 2: Type Checking and Validation
#### Task Description:
Create a function `validateObject` that takes an object and a schema. The 
schema defines the expected types for each property in the object. The 
function should:  
  1. Validate that each property in the object matches the type specified 
  in the schema.
  2. Return `true` if all properties are valid, otherwise return `false`.
  3. **Requirements:**
     - Use `typeof` or `instanceof` for type checking.
     - Handle nested objects recursively.
     - Support common types: `string`, `number`, `boolean`, `object`, 
   `array`, `function`.

```js
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
```

  - [Solution of Exercise 2](./2-validator.js)
