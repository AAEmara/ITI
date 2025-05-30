# Object Oriented Programming using Python - Lab 4

## Table of Contents
  - [Exercise 1](#exercise-1)
  - [Exercise 2](#exercise-2)
  - [Exercise 3](#exercise-3)
  - [Exercise 4](#exercise-4)
  - [Exercise 5](#exercise-5)
  - [Exercise 6](#exercise-6)
  - [Exercise 7](#exercise-7)
  - [Exercise 8](#exercise-8)


## Exercise 1
  1. Define a class attribute "color" with a default value white.  
  i.e., Every vehicle should be white.

  ```python
  class Vehicle:
	def __init__(self, name, max_speed, mileage):
		self.name = name  
		self.max_speed = max_speed  
		self.mileage = mileage  

  class Bus(Vehicle):
  	pass

  class Car(Vehicle):
  	pass
  ```

### Ex1: Solution
  - [Problem 1 Python Script Solution](./solutions/1-vehicle.py)

## Exercise 2
  2. Create a Bus child class that inherits from the Vehicle class. The 
  default fare charge of any vehicle is seating `capacity * 100`. If Vehicle 
  is `Bus` instance, we need to add an extra 10% on full fare as maintenance
  charge. So, total fare for `Bus` instance will become the   
  `final amount = total fare + 10% of total fare.`.

  _Note: The bus seating capacity is 50. So, the final fare amount should be 
  5500. You need to override the `fare()` method of a Vehicle class in `Bus` 
  class._

  Use the following code for your parent Vehicle class. We need to access the 
  parent class from inside a method of a child class.

  ```python
  class Vehicle:
	def __init__(self, name, mileage, capacity):
		self.name = name
		self.mileage = mileage
		self.capacity = capacity

	def fare(self):
		return self.capacity * 100

  class Bus(Vehicle):
	pass

  school_bus = Bus("School Volvo", 12, 50)

  print("Total Bus fare is:", school_bus.fare())
  ```

### Ex2: Solution
  - [Problem 2 Python Script Solution](./solutions/2-bus.py)

## Exercise 3
  3. Determine if school\_bus is also an instance of the Vehicle class

  ```python
  class Vehicle:
	def __init__(self, name, mileage, capacity):
		self.name = name
		self.mileage = mileage
		self.capacity = capacity

  class Bus(Vehicle):
	pass

  school_bus = Bus("School Volvo", 12, 50)
  ```

### Ex3: Solution
  - [Problem 3 Python Script Solution](./solutions/3-is_instance.py)

## Exercise 4
  4. Define a class named Rectangle which can be constructed by a length and 
  width. The Rectangle class has a method which can compute the area.

  _Hints: Use def methodName(self) to define a method._

### Ex4: Solution
  - [Problem 4 Python Script Solution](./solutions/4-rectangle.py)

## Exercise 5
  5. Define a class which has at least two methods:  
  `getString`: to get a string from console input  
  `printString`: to print the string in upper case.


### Ex5: Solution
  - [Problem 5 Python Script Solution](./solutions/5-two_methods.py)

## Exercise 6
  6. Define a class Person and its two child classes: Male and Female.  
  All classes have a method "getGender" which can print "Male" for Male 
  class and "Female" for Female class.

### Ex6: Solution
  - [Problem 6 Python Script Solution](./solutions/6-person.py)

## Exercise 7
  7. Write a Python class to find validity of a string of parentheses, 
  '(', ')', '{', '}', '[' and '].

  These brackets must be close in the correct order, for example "()" and 
  "()[]{}" are valid but "[)", "({[)]" and "{{{" are invalid.

### Ex7: Solution
  - [Problem 7 Python Script Solution](./solutions/7-parentheses.py)

