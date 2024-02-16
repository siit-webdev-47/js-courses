console.log('functions recap');

let x = 1;

console.log('before function call: ', x);
outerTest();
console.log('after function call: ', x);

/**
 *  declaring a function inside another function
 */
function outerTest() {
    /**
     * 
     */
    function innerTest() {
        // let x = 333;
        console.log('in innerTest function: ', x);
    }
    
    let x = 22;
    console.log('in outerTest function: ', x);

    innerTest();
}

