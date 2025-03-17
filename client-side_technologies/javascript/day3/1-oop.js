#!/usr/bin/node

class Employee {
  name;
  age;
  department;
  occupation;
  #salary;

  constructor (name, age, department, occupation, salary) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.occupation = occupation;
    this.#salary = salary;
  }

  set salary(salary) {
    this.#salary = salary;
  }

  get salary() {
    return this.#salary;
  }

  information () {
    console.log(`${this.name} is ${this.age} years old.
Works at ${this.department} department as a/an ${this.occupation}.
${this.name}'s salary is ${this.salary}EGP/month`);
  }
}

class Manager extends Employee {
  subordinates;

  constructor (name, age, department, occupation, salary, subordinates) {
    super(name, age, department, occupation, salary);
    this.subordinates = subordinates;
  }

  information () {
    console.log(`${this.name} is ${this.age} years old.
Works at ${this.department} department as a/an ${this.occupation}.
${this.name}'s salary is ${this.salary}EGP/month`);

    console.log(`Employees that are managed by ${this.name}:`);
    this.subordinates.map((subordinate) => console.log(`  - ${subordinate}`));
  }
}

class Developer extends Employee {
  techStack;

  constructor (name, age, department, occupation, salary, techStack) {
    super(name, age, department, occupation, salary);
    this.techStack = techStack;
  }

  information () {
    console.log(`${this.name} is ${this.age} years old.
Works at ${this.department} department as a/an ${this.occupation}.
${this.name}'s salary is ${this.salary}EGP/month`);

    console.log(`${this.name}'s tech stack:`);
    for (let category in this.techStack) {
      console.log(`  - ${category}: ${this.techStack[category]}`);
    }
  }
}

class Intern extends Employee {
  supervisor;
  internRole;
  graduationStatus;
  techStack;

  constructor (name, age, department, salary, supervisor,
               internRole, graduationStatus, techStack) {
    super(name, age, department, salary);
    this.supervisor = supervisor;
    this.internRole = internRole;
    this.graduationStatus = graduationStatus;
    this.techStack = techStack;
  }

  information () {
    console.log(`${this.name} is ${this.age} years old.
${this.name}'s internship is at ${this.department} as a/an ${this.internRole},
under the supervison of ${this.supervisor}.
${this.name} is a/an ${this.graduationStatus}.`);

    console.log(`${this.name}'s tech stack:`);
    for (let category in this.techStack) {
      console.log(`  - ${category}: ${this.techStack[category]}`);
    }
  }
}

// Employee Instance
console.log("*** Example 1: Employee Object's Instance ***");
console.log("=============================================");

const employee = new Employee(
  'Mohammed',
  27,
  'Software Development',
  'CTO',
  100000);

employee.information();

console.log();

// Manager Instance
console.log("*** Example 2: Manager Object's Instance ***");
console.log("============================================");

const manager = new Manager(
  'Youssef',
  44,
  'CIS',
  'CTO',
  200000,
  ['Youssef Ali', 'Ahmed Hossam', 'Aliaa Riyad', 'Rashed Gad']);

manager.information();
console.log();

// Developer Instance
console.log("*** Example 3: Developer Object's Instance ***");
console.log("==============================================");

const developer = new Developer(
  'Ahmed Hossam',
  29,
  'FullStack Development',
  'Django FullStack Developer',
  30000,
  {'frontend': 'React', 'backend': 'Django', 'database': 'PostgreSQL'})

developer.information();
console.log('\n');

// Intern Instance
console.log("*** Example 4: Intern Object's Instance ***");
console.log("===========================================");

const intern = new Intern(
  'Aliaa Riyad',
  22,
  'FullStack Development',
  5000,
  'Rashed Gad',
  'MERN FullStack Developer',
  'graduate',
  {'frontend': 'React', 'backend': 'Node.js', 'database': 'MongoDB'})

intern.information();
console.log();

// Salary's Getter on Employee's Instance
console.log("*** Example 5: Employee Object's Getter ***");
console.log("===========================================");

console.log(`Employee\'s salary using getter method: ${employee.salary}\n`);

// Salary's Setter on Employee's Instance
console.log("*** Example 5: Employee Object's Setter ***");
console.log("===========================================");

employee.salary = 150000; //Using the setter method to change the value
console.log(`Employee\'s salary change using setter method: \
${employee.salary}`);
