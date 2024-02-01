console.log('Iterations');

// let i = 0;
// while (i < 5) {
//     console.log(`I love CSS! (${i + 1})`);
//     i++;
// }
// console.log('End of the iteration!');


// for (let i = 10; i > 0; i = i - 2) {
//     console.log(`I love CSS! (${i})`);
// }
// console.log('End of the iteration!');

const randomNumber = Math.floor(Math.random() * 3) + 1;
console.log(randomNumber);

let userNumber;
let tries = 0;
do {
    userNumber = prompt(`Guess a number between 1 and 3`);
    userNumber = Number(userNumber);
    
    tries++;
} while (userNumber != randomNumber);

alert(`Congrats! You guessed it in ${tries} attempts.`);