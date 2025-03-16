#!/usr/bin/node

/*
 * 1. The operations inside the parenthesis will execute first,
 *    where the multiplication and division are executed first (left to right):
 *   5 * 2 = 10
 *   8 / 4 = 2
 *   Output for this step is: (10 + 10 - 2) ** 2 / 2
 *
 * 2. Then the addition and subraction operaters are going to be executed from
 *    left to right:
 *   10 + 10 = 20
 *   20 - 2 = 18
 *   Output for this step is: 18 ** 2 / 2
 *
 * 3. The result, that was resulted from the operations done inside the 
 *    parenthesis is going to be multiplied by itself twice (exponentiation): 
 *   18 ** 2 = 324
 *   Output for this step is: 324 / 2
 *
 * 4. The result from the exponentation will be divided by two: 
 *   324 / 2 = 162
 *   Output for this step is: 162
 *
 * Final Result is 162.
**/ 

let number = (10 + 5 * 2 - 8 / 4) ** 2 / 2;

console.log(number);
