console.log('Array methods recap');

// const cities = ['Iasi', 'Cluj-Napoca', 'Bucuresti', 'Timisoara', 'Brasov'];

// cities.forEach(function (elem, k){
//     console.log(elem, k);
// });

// //  sort
// console.log('');
// console.log(' SORTED ');
// cities
//     // .sort()
//     .forEach(function (elem, k){
//         console.log(elem, k);
//     });


// //  filter
// console.log('');
// console.log(' FILTERED ');
// cities
//     .filter(function (elem){
//         return elem[0] == 'B';
//     })
//     .sort()
//     .forEach(function (elem, k){
//         console.log(elem, k);
//     });


const advCities = [
    {
        name: 'Iasi',
        rating: 7
    },
    {
        name: 'Cluj-Napoca',
        rating: 9
    },
    {
        name: 'Bacau',
        rating: 7
    },
    {
        name: 'Bucuresti',
        rating: 8
    },
    {
        name: 'Timisoara',
        rating: 10
    },
    {
        name: 'Bistrita',
        rating: 7
    },
    {
        name: 'Brasov',
        rating: 7
    }
];

console.log(advCities);


advCities
    .sort(function (a, b) {
        if(a.rating !== b.rating) {
            return a.rating - b.rating;
        }

        // this executes only if a === b
        if(a.name < b.name){
            return -0.01;
        }

        if(a.name == b.name){
            return 0;
        }

        return 0.1;
    })
    .forEach(function (elem, k){
        console.log(elem, k);
    });