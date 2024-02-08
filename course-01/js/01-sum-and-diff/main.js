console.log('This IS JavaScript! From main.js');

// debugger;

let firstNumber = prompt('Input the first number:');
firstNumber = Number(firstNumber);

let secondNumber = prompt('Input the second number:');
secondNumber = Number(secondNumber);

let sum = firstNumber + secondNumber;
alert(`${firstNumber} + ${secondNumber} = ${sum}`);

let diff = firstNumber - secondNumber;
alert(`${firstNumber} - ${secondNumber} =  ${diff}`);