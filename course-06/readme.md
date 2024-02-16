# Course 06

## Recap

- Git bash using _echo_ command to append text in a file
- Global variables behaviour in separate js files
- Relative path vs absolute path
- Opening a file via _file_ protocol vs _HTTP_ protocol
- Adding / removing / replacing elements in an array
- [Array.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) vs [Array.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) - some array methods change (mutate) the original array, others don't.

## Primitive values in JS
-  [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) (primitive value, primitive data type) is data that is not an object and has no methods or properties.
- Transmission through value vs transmission through refference `recording time 1:09:00`
- Using the [spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to copy values from an array into another array `recording time 1:26:41`


## Functions in JS
- Declaring a function `recording time 1:40:22`
- Debugger - using _step into_ button to follow the code in the function body `recording time 1:50:20`
- Local variables vs Global variables
- Functions and variables hoisting
- Using the return keyword to return a value from a function
- Native functions vs custom defined functions
- Function paramenters / arguments
- What happens if a function declares a local variable named identically with a global variable

## Practical example of using functions
Implementing a dice game that simulates 10 dice throws for 3 players.

- Implementing a function that simulates a dice roll, having as parameters the dice sides and the number of dice `recording time 2:36:45`
- Implementing a function that simulates one round logic for 3 players `recording time 2:49:26`
- Implementing a function that sums the dice `recording time 2:55:50`
- Implementing the main program: 10 rounds `recording time 3:00:22`


## Video resources
1. [JavaScript - Reference vs Primitive Values/ Types](https://youtu.be/9ooYYRLdg_g?si=7Y-fAe2r72Xfq7Wd) - 20 mins
2. [Learn JavaScript Hoisting In 5 Minutes](https://youtu.be/EvfRXyKa_GI?si=iKGSvSQ96gDu-l6O) - 5 mins

## Indepentent homework
1. Use an array to store the names of the students in a group. On program start, ask the user to confirm for each student if it's present or misssing. Use a confirm dialog box to repeatedly extract a random student, until the user presses the cancel button.