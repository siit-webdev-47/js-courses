console.log('hw preparation..');

// iteration throug an object properties
const data = {
    "name": "Petrica",
    "age": 56,
    "location": "Bacau",
    "profession": "Teacher"
};

// FIRST SOLUTION
// const dataKeys = Object.keys(data);
// dataKeys.forEach(p => console.log(p, data[p]));

// FIRST SOLUTION, ONE LINER
Object.keys(data).forEach(p => console.log(p, data[p]));


// SECOND SOLUTION
for(p in data){
    console.log(p, data[p]);
}

// console.log(data.name);
// console.log(data['name']);


