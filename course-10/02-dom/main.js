console.log('main.js is loaded...');

const playersList = [
    {
        name: "Gigi",
        color: "teal",
        avatar: "🛒"
    },
    {
        name: "Joe",
        color: "olive",
        avatar: "🏹"
    },
    {
        name: "Jane",
        color: "darkred",
        avatar: "🍟"
    },
];

const parentElem = document.querySelector('.players-container')


function displayPlayer(player){
    // adds the container div
    const playerComponent = document.createElement('div');
    playerComponent.classList.add('player');
    playerComponent.style.color = player.color;
    playerComponent.style.borderColor = player.color;

    // playerComponent.dataset.counter = 0;
    playerComponent.setAttribute('data-counter', 0);

    parentElem.append(playerComponent);

    // adds the text
    const textNode = document.createTextNode(`${player.avatar} ${player.name}`);
    playerComponent.append(textNode);
    
    // adds the score span
    const scoreSpan = document.createElement('span');
    scoreSpan.textContent = '0';
    playerComponent.append(scoreSpan);

    // adds the click event listener
    playerComponent.addEventListener('click', playerClick);
}

playersList.forEach(player => displayPlayer(player));


function playerClick(evt){
    const clickedElem = evt.target;

    let counter = Number(clickedElem.dataset.counter);

    // counter++
    clickedElem.dataset.counter = ++counter;

    const spanElem = clickedElem.querySelector('span');
    spanElem.textContent = counter;
}