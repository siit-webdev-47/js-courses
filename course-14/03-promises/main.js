console.log('Promises....');

const visitClujPromise = new Promise((resolve, reject) => {
    console.log('Creating the promise');

    // shoud have some asynchronous code
    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve('Here I am');
        }
        else {
            reject('Some lousy excuse... Buuuu!');
        }
    }, 2000);

    console.log('The promise is pending');
});


visitClujPromise.then(
    data => {
        console.log('The promise was fulfilled!');
        console.info(data);
    }, 
    errorMsg => {
        console.log('The promise was rejected!');
        console.error(errorMsg);
    }
)