console.log('OOP is coming!');

// const students = [];
// console.log(students.length);

// students.push('Peppa');


// const amongUsCharacter = {
//     name: `Pepper`,
//     avatar: `🚗`,
//     isImpostor: false,

//     sayHello() {
//         console.log(`Hey! I am ${this.name}`);
//     }
// };

// console.log(amongUsCharacter);


// const amongUsOtherCharacter = {
//     name: `Blue`,
//     // avatar: `🍧`,
//     isImpostor: false,

//     sayHello() {
//         console.log(`Hello! My name is ${this.name}`);
//     }
// };


function amongUsCharacterFactory(name, avatar) {
    return {
        name,
        avatar,
        isImpostor: false,

        sayHello() {
            console.log(`Hey! I am ${this.name}`);
        }
    }
}



class AmongUsCharacter {

    constructor(characterName, characterAvatar){
        console.log('A new among us character will be created...');
        this.name = characterName;
        this.avatar = characterAvatar;
        this.color = 
        this.isImpostor = false;
    }

    sayHello(){
        console.log(`Hey! I am ${this.name}. My avatar is ${this.avatar}!`);
    }   
}


const amongUsChar1 = new AmongUsCharacter('Red', `🚗`);
amongUsChar1.sayHello();


const amongUsChar2 = new AmongUsCharacter('Blue', '🏒');
amongUsChar2.sayHello();


// const players = [new AmongUsCharacter('Red', `🚗`), new AmongUsCharacter('Blue', '🏒')];





const name = ['Red', 'Blue'];
const avatar = [`🚗`, '🏒'];

function sayHello(i){
    console.log(`Hey! I am ${name[i]}. My avatar is ${avatar[i]}!`);
}