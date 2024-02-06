# Course 04

## Recap

Implementing a program that prompts the user for numeric values, until the _Cancel_ button is pressed. 

The program displays in an alert the maximum of the values given by the user.

CONCEPTS USED TO SOLVE THE PROBLEM

- _**-Infinity**_, _**Infinity**_, _**NaN**_ values belonging to _**Number**_ data type

- Detecting if a variable has been initialized by checking if it's value is _**undefined**_.

- The _**prompt()**_ method returns a _**null**_ value when the _**Cancel**_ button is pressed, otherwise it returns a _**String**_ 

- Controling a loop by testing if the user pressed the _**Cancel**_ button.
- Implementing the find max algorithm: 
    - if the max variable is not initialized, assign the given value
    - if the max variable is already initialized, test if the recently given value is greater than the already stored max value

- Testing scenarios

## Arrays in JavaScript
1. The concept of [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) in JavaScript

2. Intitializing a variable as an array

3. The [Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) property

4. Adding a value in the array 
    - by specifying the index of the new value
    - at the end of the array, by using the [Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push#syntax) method
    - at the beggining of the array, by using [Array.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift#syntax) method

5. Removing elements from an array: 
    - from the end of the array, by using the [Array.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method
    - from the beggining of the array, by using [Array.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) method
    - from the inside of the array, by using the [Array.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method

6. Other useful array methods:
    - [Array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
    - The [Spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) on Arrays

## Example of using Arrays in JavaScript

Implementing a program that displays the values greater than the average of the given values.

SOLVING THE PROBLEM

1. Implementing a program that displays all the elements of a static array `recording minute 1:51:00`

2. Improving the program by adding a section that prompts the user for a **fixed** number of elements `recording minute 1:56:17`

3. Improving the program by allowing the user to add **any number** of elements in the array, until **Cancel** is pressed by using the [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) statement `recording minute 2:08:47`

4. Improving the program by calculating the sum of all the given values `recording minute 2:21:30`

5. Improving the program by calculating the average of the given values `recording minute 2:28:45`

6. Improving the program by displaying the values greater than the average `recording minute 2:30:47`

## Independent Homework
Refactor the implemented solution in the RECAP section of the course by using a do-while flow control structure.