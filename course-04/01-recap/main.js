console.log('guessing game loaded...');

const maxNumber = 6;

let userNumber = prompt(`Guess a number between 1 and ${maxNumber}`);
userNumber = Number(userNumber);

if (userNumber >= 1 && userNumber <= maxNumber) {
    // CODE TO BE EXECUTED ONLY IF THE USER INPUT IS A VALID NUMBER
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    console.log(randomNumber);

    if (userNumber == randomNumber) {
        alert(`Congrats, you guessed the number`);
    }
    else {
        alert(`You failed. The number was ${randomNumber}...`);
    }
}
else {
    // CODE TO BE EXECUTED ONLY IF THE USER INPUT IS NOT A VALID NUMBER
    alert(`The number you entered is invalid!`);
}
