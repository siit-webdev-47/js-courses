console.log(`variables scope`);

let x = 1;


function outerFnc(){
    let x = 22;
    console.log(`In outer function, x: ${x}`);

    //  
    function innerFnc(){
        console.log(`In inner function, x: ${x}`); // will display 22
    }

    innerFnc();

    // 
    globalScopeFnc();
}


function globalScopeFnc() {
    console.log(`In global scope function, x: ${x}`); // will display 1
}




