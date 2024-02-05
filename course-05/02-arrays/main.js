console.log('Arrays demo');

let grades = [];
let sum = 0;

// array input
for (let i = 0; true; i++) {
    let userInput = prompt(`Input grade ${i + 1}: `);

    if(userInput === null){
        break;
    }
    
    userInput = Number(userInput);
    grades.push(userInput);
    sum = sum + userInput;
    // sum += userInput;
}

let avg = sum / grades.length;
console.log(`Sum: ${sum}`);
console.log(`Average: ${avg}`);


// array output for all the array elements
console.log('===============');
console.log('Display all the grades');
for (let i = 0; i < grades.length; i++) {
    console.log(`Grade ${i + 1}: ${grades[i]}`);
}

// array output for the array elements greater than average
console.log('===============');
console.log(`Grades greater than average: `);
for (let i = 0; i < grades.length; i++) {
    if(grades[i] > avg){
        console.log(`Grade ${i + 1}: ${grades[i]}`);
    }
}