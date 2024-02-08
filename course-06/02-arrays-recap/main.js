console.log('Arrays recap..');

let students = ['Rares', 'Adi', 'Diana P.', 'Florin', 'Miana'];

// adding elements
students.push('Lucian');
students.push('Ilinca', 'Ana Maria');

students.unshift('Diana Z.');
students.unshift('Patricia', 'Clara');

// removing
// const last = students.pop();
// console.log(last);

// const first = students.shift();
// console.log(first);

// insert 
students.splice(1, 0, 'Anonymous');
// delete
students.splice(1, 1);


let group = students.slice(2,4);
console.log(group);


// sorting the elements of the array
// students.sort();

console.log(students);

