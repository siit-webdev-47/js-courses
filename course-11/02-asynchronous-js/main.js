console.log('main.js is loaded');


const btnElem = document.querySelector('button');
btnElem.addEventListener('click', () => console.log('You clicked the button!'));

console.log('Before set interval');
setTimeout(() => console.log('Pizza has arrived...'), 2000);
console.log('After set interval');

// some CPU comnsuming code
for (let i = 0; i < 5000; i++) {
    console.log(i);
}

console.log('All the intructions from main.js are executed...');