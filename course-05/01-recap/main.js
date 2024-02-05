console.log('Max of any given set of numbers');

let max;
let userNumber;

while (userNumber !== null) {
    userNumber = prompt('Input a number or press Cancel to stop the program');

    if (userNumber !== null) {
        userNumber = Number(userNumber);

        if (typeof max === 'undefined' || max < userNumber) {
            max = userNumber;
        }
    }
}

// OUTPUT
if (typeof max === 'undefined') {
    alert(`No specified value`);
}
else {
    alert(`Max number is: ${max}`);
}
