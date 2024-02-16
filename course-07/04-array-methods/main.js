console.log('array methods');

let testArray = [-26, 9, 90, -55, 0];
console.log(testArray);



testArray.forEach(function (elem, i) {
    if (elem >= 0) {
        console.log(i, elem);
    }
});


let filteredElems = testArray.filter(function(elem) {
    // if(elem < 0){
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return elem >= -10 && elem <= 10;
});
console.log(filteredElems);

