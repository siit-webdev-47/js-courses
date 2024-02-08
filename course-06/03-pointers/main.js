console.log('Pointers..');

let grade = 10;
let nextGrade = grade;

grade = grade - 1;

console.log(`grade: ${grade}`);
console.log(`nextGrade: ${nextGrade}`);


const adiGrades = [7, 8];
adiGrades.push(10);

const mianaGrades = [...adiGrades];
// const mianaGrades = [];
// for (let i = 0; i < adiGrades.length; i++) {
//     mianaGrades.push(adiGrades[i]);
// }

adiGrades[1] = 5;

console.log(adiGrades);
console.log(mianaGrades);