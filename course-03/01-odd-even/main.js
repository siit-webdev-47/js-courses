console.log('Decisional structures continued...');

let userNumber = prompt('Input a value');
userNumber = Number(userNumber);


if (userNumber % 2 == 0) {
    alert('Number is even');
} else {
    alert('Number is odd');
}


// if (userNumber % 2 == 1 || userNumber % 2 == -1) {
//     alert('Number is odd');
// } else {
//     alert('Number is even');
// }


// if ( Math.abs(userNumber % 2) == 1) {
//     alert('Number is odd');
// } else {
//     alert('Number is even');
// }