console.log('main.js is loaded...');


function playerClick(evt){
    const clickedElem = evt.target;

    // get the current counter value from the data-counter HTML property
    let counter = Number(clickedElem.dataset.counter);

    // detect the current class of the clicked element
    const currentClass = counter % 4;
    clickedElem.classList.remove(`player-clicked-${currentClass}`);

    // increment the counter and save it in the data-counter HTML property
    counter++;
    clickedElem.dataset.counter = counter;
    
    // apply the new class to the cliked element
    const newClass = counter % 4;
    clickedElem.classList.add('player-clicked-' + newClass);

    // display the counter in the child span of the clicked element
    const displaySpan =  clickedElem.querySelector('span');
    displaySpan.textContent = counter;
}


function inputKeyDown(evt) {
    console.log(evt);
    console.log(evt.target);
}
