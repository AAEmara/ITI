# JavaScript Lab6

## Table of Contents
  - [Lab 6](#lab-6)
    - [Exercise 1](#exercise-1)
    - [Exercise 2](#exercise-2)
    - [Expected Behaviour](#expected-behaviour)

## Lab 6
### Exercise 1
  1. **HTML Structure**
     - [x] A heading (\<h1\>) to display a greeting message.
     - [x] A button ("Enter Name") to prompt the user to enter their name.
     - [x] A **color palette** (using <input type="color">) to change the text 
     color dynamically.

  - [HTML Structure Solution](./index.html)

---

### Exercise 2
  2. **JavaScript Features**
     - [x] **prompt():** Ask for the user's name when they click "Enter Name".
     - **localStorage:** Store and retrieve:
       - [x] The user's name.
       - [x] The selected color.
     - [x] **DOM Manipulation:**
       - [x] Display the name dynamically in the heading.
       - [x] Change the text color using `style.color`.
     - [x] **Event Listeners:**
       - [x] Handle button clicks (addEventListener)
       - [x] Detect color changes (input events on `<input type="color">`).
     - [x] **setTimeout():**
       - [x] Show a welcome message after 2 seconds.
     - [x] **BOM APIs:**
       - [x] Log the user's browser info using 
       `console.log(navigator.userAgent)`.
       - [x] Show the screen width and height in the console (screen.width, 
       screen.height)

  - [JavaScript Features Solution](./script.js)

---

### Expected Behaviour
  1. **User clicks "Enter Name" &rarr;** A prompt appears to enter their name.
  2. **Users enters a name &rarr;** It gets displayed in the heading and saved 
  in localStorage.
  3. **User refreshes the page &rarr;** The name remains displayed.
  4. **User selects a color &rarr;** The text color changes dynamically and is 
  saved in localStorage;
  5. **User refreshes the page &rarr;** The saved color is applied to the 
  heading.
  6. **User clicks "Clear Name" &rarr;** The name is removed from the page and 
  localStorage
  7. **After 2 seconds &rarr;** A welcome alert appears.
