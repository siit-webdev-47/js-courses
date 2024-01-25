console.log('main.js is loaded...');

// read a string - no need for casting!
let userName = prompt('What is your name?');

// read a boolean
let employmentStatus = confirm('Are you emplyed?');

// read (input) a number - DATA INPUT
let userAge = prompt('How old are you?');
userAge  = Number(userAge);

// output in console
console.log('Name: ', userName);
console.log('Employed: ', employmentStatus);
console.log('Age: ', userAge);

// increment the user age
userAge = userAge + 1;

// output 
let outputMessage = 'Next year you will be ' + userAge + ' years old!';
alert(outputMessage);