console.log('Arrow functions');

// Example 1

// function displayElem(el){
//     console.log(`displaying the parameter`);
//     console.log(el);
// }

// const displayElem = function(el){
//     console.log(`displaying the parameter`);
//     console.log(el);
// }

const displayElem = el => {
    console.log(`displaying the parameter`);
    console.log(el);
}


// function displayDubleElems(el1, el2){
//     console.log(`displaying the first parameter`);
//     console.log(el1);
//     console.log(`displaying the second parameter`);
//     console.log(el2);
// }


const displayDubleElems = (el1, el2) => {
    console.log(`displaying the first parameter`);
    console.log(el1);
    console.log(`displaying the second parameter`);
    console.log(el2);
}


// function calcSum(a, b){
//     return a + b;
// }

const calcSum = (a, b) => a + b;

const numbers = [0, 10, -6, 9, -5];
// const posNumbers = numbers.filter(function(e){
//     return e >= 0;
// });
const posNumbers = numbers.filter(e => e >= 0);

// numbers.forEach(function(e){
//     console.log(e);
// });
numbers.forEach(e => console.log(e));


const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(function(word){
//     return word.length > 6;
// });
const result = words.filter(word => word.length > 6);
console.log(result);


// function getOpposite(nr){
//     return -nr;
// }
const getOpposite = nr => -nr;
