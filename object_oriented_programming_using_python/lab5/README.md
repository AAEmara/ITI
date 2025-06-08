# Object Oriented Programming using Python - Lab 5

## Table of Contents
  - [Exercise 1](#exercise-1)
  - [Exercise 2](#exercise-2)


## Exercise 1
  1. Create class employee with the following characteristics:  
     -  **Attributes:**  
        -  First_name
        -  Last_name  
        -  Age  
        -  Department  
        -  Salary  
        -  Static list contains all employee

     -  **Methods:**  
        -  constructor  
           -  Assign values to the instance attributes  
	   -  Insert the created object to the list  
	   -  Insert new record in table employee in database  
        -  **transfer()**  
           -  Change employee department  
	   -  Update the database record with the update
        -  **fire()**  
           -  Remove the employee from the shared list  
	   -  Delete its record from the database  
        -  **show()**
           -  Prints all employee data  
        -  **List_employee()**  
           -  Select all employees and print their data  

### Ex1: Solution
  - [Problem 1 Python Script Solution](./solutions/employee.py)

## Exercise 2
  2. Create class manager with the following characteristics  
    - Class manager inherits from class employee with additional attribute   
    Managed_department
    - methods:  
      - show()
        - Will print all data except the salary will print confidential  
	instead of the salary value

### Ex2: Solution
  - [Problem 2 Python Script Solution](./solutions/manager.py)

## General Note
  - Let the app use the command line interface as following:  
    - Print a menu for the user with the operation he can do and the keyword  
    to enter for running an operation, for example:
      - For adding new employee enter "add"  
      - If manager presses "m" / if emplyee presses "e"  
        - Please insert data:  
	  - Name:>>  
	  - Age:>>   
	  - And so on.  
      - The final option in the menu should be "q" for exiting the program.

### Execute the Program
  - Execute the program through running the following command:
  ```bash
  ~/solutions$: ./main.py
  ```
