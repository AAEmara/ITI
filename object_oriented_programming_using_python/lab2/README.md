# Object Oriented Programming using Python - Lab 2

## Table of Contents
  - [Exercise 1](#exercise-1)
  - [Exercise 2](#exercise-2)
  - [Exercise 3](#exercise-3)
  - [Exercise 4](#exercise-4)
  - [Exercise 5](#exercise-5)
  - [Exercise 6](#exercise-6)

## Exercise 1
  1. Given a list of numbers, create a function that returns a list where 
  all similar adjacent elements have been reduced to a single element, so 
  [1,2,3,3] returns [1,2,3]  
  _Note:_  
        _You may create a new list or modify the passed in list._

### Ex1: Solution
  - [Problem 1 Python Script Solution](./solutions/1-unique_element.py)

## Exercise 2
  2. **Consider dividing a string into two halves**  
     - Case1:  
         The length is even, the front and back halves are the same length.

      - Case2:  
         The length is odd, we'll say that the extra char goes in the front 
	 half.  
           E.g. 'abced', the front half is 'abc', the back half 'de'.  
	   Given 2 strings, a and b, return a string of the form:  
	     **(a-front + b-front) + (a-back + b-back)**

### Ex2: Solution
  - [Problem 2 Python Script Solution](./solutions/2-divide_a_string.py)

## Exercise 3
  3. Write a Python function that takes a sequence of numbers and determines 
  wether all the numbers are different from each other.  

  ```
  E.X. [1,5,7,9]     -> True  
       [2,4,5,5,7,9] -> False
  ```

### Ex3: Solution
  - [Problem 3 Python Script Solution](./solutions/3-is_different.py)

## Exercise 4
  4. Given unordered list, sort it using algorithm bubble sort  
      **(read about bubble sort and try to implement it)**

### Ex4: Solution
  - [Problem 4 Python Script Solution](./solutions/4-bubble_sort.py)

## Exercise 5
  5. Guess game  
     - Your game generates a random number and gives only 10 tries for the 
     user to guess that number.  
     - Get a user input and compare it with the random number  
     - Display a hit message to the user in case the use number is smaller 
     of the random number  
     - If the user type number is out of range(100), display a hint message 
     and don't count this as try  
     - In case the user entered a correct number within the 10 tries, display 
     a congratulations message and let your application guess another random 
     number with the remaining number of tries  
     - If the user finishes all his tries, display a message to ask him if he 
     wants to play again or not.

### Ex5: Solution
  - [Problem 5 Python Script Solution](./solutions/5-guess_game.py)

## Exercise 6
  6. Make account on 
  [Hacker-rank for problem solving](https://www.hackerrank.com/)  
  **(bonus)**  
  Try to solve this problem and send me your submission  
  **[Diagonal Difference](https://www.hackerrank.com/challenges/diagonal-difference/problem)**

### Ex6: Solution
  - [Problem 6 Python Script Solution](./solutions/6-triangle_pattern.py)
