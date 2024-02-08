console.log('Functions..');

// function declaration
function promptForNumber(promptMsg = 'Input a number') {
    let userNumber = prompt(promptMsg);
    userNumber = Number(userNumber);
    console.log(`in function, userNumber = ${userNumber}`);
    return userNumber;
}

// function call
let nr1 = promptForNumber('Input the first number');
console.log(nr1);

// function call
let nr2 = promptForNumber('Input the second number');
console.log(nr2);

// function call
let nr3 = promptForNumber();
console.log(nr3);
