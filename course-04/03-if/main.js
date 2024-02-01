console.log('Display the absolute value of a given number...');

let userNumber = prompt('Input a value');
userNumber = Number(userNumber);

if (userNumber < 0) {
    userNumber = -userNumber;
}


alert(userNumber);