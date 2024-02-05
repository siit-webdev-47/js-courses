console.log('Max of any given set of numbers');

let max;
let askForValue = true; 

while (askForValue) {
    let userNumber = prompt(`Input a value and pressing the OK button, stop the program by pressing the cancel button`);

    if(userNumber === null){
        askForValue = false;
    }
    else{
        userNumber = Number(userNumber);
        if(max === undefined){
            max = userNumber;
        }
        else {
            if(max < userNumber){
                max = userNumber;
            }
        }
    }
}

alert(`Max value is: ${max}`);