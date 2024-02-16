console.log('JSON!');


// let personName = 'Adi';
// let personSign = 'Libra';
// let personColor = 'Teal';
// let personGrade = 7.15;

let persArray = ['Adi', 'Libra', 'Teal', 7.15, true];
console.log(persArray);

let persObj = {
    name: 'Adi',
    sign: 'Libra',
    favouriteColor: 'Teal',
    grade: 7.15,
    petOwner: true
};
console.log(persObj);


let students = [
    {
        name: 'Dana',
        sign: 'Aquarius',
        favouriteColor: 'Green',
        grade: 9.60,
        petOwner: true
    },
    {
        name: 'Florin',
        sign: 'Aries',
        favouriteColor: 'Blue',
        grade: 9.50,
        petOwner: false
    },
    {
        name: 'Ana-Maria',
        sign: 'Libra',
        favouriteColor: 'Purple',
        grade: 9.40,
        petOwner: true
    },
    {
        name: 'Adi',
        sign: 'Libra',
        favouriteColor: 'Teal',
        grade: 7.15,
        petOwner: true
    }
];


students
    .sort(function (a, b) {
        // if (a.grade > b.grade)
        //     return 1;
        // else if (a.grade < b.grade)
        //     return -1;
        // else
        //     return 0;
        return a.grade - b.grade;
    })
    .forEach(function(s) {
        console.log(s.grade);
    })
    .forEach(function(s) {
        console.log(s.sign);
    });


// students.forEach(function(s) {
//     console.log(s.grade);
// })

console.log(students);
