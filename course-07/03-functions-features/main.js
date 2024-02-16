console.log('functions features');


function simpleFunction(){
    console.log('This is a simple function');
}


let x = true;

//
let sum = function (){
    console.log('Function executes!!!');
}

// 
let counter = 59;
let displayCounter = function (){
    // console.log('Function executes!!!');
    console.log(--counter);

    if(counter == 0){
        clearInterval(intervalId);
    }
}

let intervalId = setInterval(displayCounter, 1000);
