// let nr1 = prompt('Input a number');
// nr1 = Number(nr1);

// let nr2 = prompt('Input a number');
// nr2 = Number(nr2);



function sumNumbers() {
    console.log('button was clicked...');

    const nr1Elem = document.querySelector('#nr-1');
    const nr1 = Number(nr1Elem.value);
    
    const nr2Elem = document.querySelector('#nr-2');
    const nr2 = Number(nr2Elem.value);

    const outputElem = document.querySelector('output');
    outputElem.textContent = nr1 + nr2;
}