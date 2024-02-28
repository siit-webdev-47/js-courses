# Course 08

## Recap - array methods
1. Array methods (in place vs copy | returning a vector vs null): Array.foreach(), Array.sort(), 
2. Chaining array methods - what methods allow chaining
3. Array.sort() explained - sorting by 2 criteria

## Recap - variables scope
1. Global scope - variables declared outside of any function or block
2. Function scope - variables declared inside a function
3. Determininig the variable scope when
    -  a function is declared in the global scope (the main program)
    - a function is declared inside another function (closure)

## Arrow functions
1. _No parameters_
    - No parameters, one (returned) instruction: `() => expression`
    - No parameters, one ore multiple statement, no return value: `() => { statements }`

2. _One parameter_
    - One parameter, one (returned) expression: `param => expression`
    - One parameter one (returned) expression: `(param) => expression`
    - One parameter, one ore multiple statements, no return value: `param => {  statements }`

3. _Multiple parameters_
    - Multiple parameters one (returned) expression: `(param1, paramN) => expression`
    - Multiple parameters, one ore multiple statements, no return value: 
 `(param1, paramN) => {  statements }`

## The DOM (Document Object Model)
1. The DOM hierachy 
    - a tree data structure
    - automatically created on loading the HTML file

2. Common properties (always available): 
    - document.documentElement
    - document.head
    - document.body

3. Traversing the DOM: 
    - element.childNodes property
    - element.parentNode property 
    - element.nextSiblilng property
    - element.previousSiblilng property

4. Element Nodes (created from HTML tags) vs Text Nodes (created by texts in the HTML file)

5. Getting references for DOM Elements
    - documment.querySelector()
    - documment.getElementById()
    - documment.getElementsByClassName()
    - documment.getElementByTagName()

6. Working with the DOM Elements
    - Commonly used properties: title, textContent (for the elements having tag content)
    - Evaluating a property value
    - Changing a DOM Element property will force the browser to redraw the interface
    - Placing the script tag in the HTML file, using the defer tag attribute

## A simple example to showcase the DOM usage

Creating a simple application that allows the user to input 2 values, calculate  and display the sum of the given values on a button click.

1. Adding a click event listener on the button

2. Reading the value specified in the first texbox 
    - getting the reference for the first text input 
    - evaluating the value property that controls the user given text
    - casting the value to number

3. Reading the value specified in the second texbox 
    - getting the reference for the seconds text input 
    - evaluating the value property that controls the user given text
    - casting the value to number

4. Calculating the sum

5. Displaying the sum in an output element

## Video resources
1. [JavaScript ES6 Arrow Functions Tutorial](https://youtu.be/h33Srr5J9nY?si=0kY5AzPGtLE5DG1y) - `9:30 minutes video`
2. [The JavaScript DOM explained in 5 minutes! 🌳](https://youtu.be/NO5kUNxGIu0?si=ZM6HSjmzlLn_HrqC) - `5 minutes video`
3. [DOM API - JavaScript Tutorial for beginners](https://youtu.be/wbQLEXg_urE?si=058O8T0_2dV8tFNU) - `43 minutes video`
