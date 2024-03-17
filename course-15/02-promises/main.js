console.log('Promises');


// function handleFulfilledA(promiseResult) {
//     console.log('');
//     console.log(' === Promise is fulfilled === ');
//     console.log('Value returned: ', promiseResult);
// }


// function handleRejectedA(errorMsg) {
//     console.log('');
//     console.log('!!! Promise was rejected !!!');
//     console.log('ERROR MESSAGE: ', errorMsg);
// }

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let reward = Math.random() > 0.5;

//         if(reward){
//             let beers = Math.floor(Math.random() * 3) + 1;
//             resolve(beers);
//         }
//         else {
//             reject(`You have been naughty. You get a stick!`);
//         }
//     }, 300);
// });

// myPromise
//     .then(handleFulfilledA)
//     .catch(handleRejectedA);


// fetch('https://api.chucknorris.io/jokes/categories')
//     .then(response => response.json())
//     .then(responseAsJSON => console.log(responseAsJSON));


async function getCategories(){
    // fetch 
    const response = await fetch('https://api.chucknorris.io/jokes/categories1');
    const responseAsJSON = await response.json();

    return new Promise((resolve, reject) => {
        if(response.status === 200){
            resolve(responseAsJSON);
        }
        else {
            reject('Fetch categories failed')
        }
    });
}

// call of a async function
getCategories()
    .then(
        // promise fulfilled
        data => {
            //data processing
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomCategory = data[randomIndex];
            console.log(`SELECTED CATEGORY ${randomCategory}`);

            // create a new quote with the random selected category
            // const quoteResponse = await fetch(`https://api.chucknorris.io/jokes/random?category=${randomCategory}`);
            // const quoteResponseAsJSON = await quoteResponse.json();
            // console.log(quoteResponseAsJSON.value);
        }
    )
    .catch(error => console.error(error));



