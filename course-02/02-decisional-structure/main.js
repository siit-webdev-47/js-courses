console.log('showing decisional strictures...');

// debugger;

let userNumber = prompt('Input a value: ');
userNumber = Number(userNumber);


if (userNumber >= 0) {
    let msg = 'The number is positve';
    console.log(msg);
} else {
    let msg = 'The number is negative';
    console.log(msg);
}

console.log('program ended..'); 
// let variable is not in the browser memory now...