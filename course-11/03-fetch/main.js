console.log('main.js loaded and prepared to fetch...');

async function getQuote() {
    displayElem.textContent = 'Loading quote...';

    // launchig the HTTP request
    const response = await fetch("https://api.chucknorris.io/jokes/random");

    // receiving the response & parsing it as JSON
    const responseBodyAsJSON = await response.json();

    // displaying the value property in the DOM element
    const quote = responseBodyAsJSON.value;
    displayElem.textContent = quote;
}

// adding click event listener on the button
const btnElem = document.querySelector('button');
btnElem.addEventListener('click', getQuote);

//
const displayElem = document.querySelector('.display');