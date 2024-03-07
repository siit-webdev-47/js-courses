console.log('fetch using then');

console.log(`before fetch`);

// fetch("https://api.chucknorris.io/jokes/categories")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     });


fetch("https://api.chucknorris.io/jokes/categories")
    .then(response => response.json())
    .then(data => console.log(data));


console.log(`after fetch`);