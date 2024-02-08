console.log('Dice game..');

const gameRounds = 10;
const score = [0, 0, 0];

function rollDice(diceSides = 6, numberOfDice = 1) {
    let diceArr = [];
    for (let i = 0; i < numberOfDice; i++) {
        let roll = Math.floor(Math.random() * diceSides) + 1;
        diceArr.push(roll);
    }

    return diceArr;
}


function sumDice(diceValues){
    let score = 0;
    for (let i = 0; i < diceValues.length; i++) {
        score += diceValues[i];
    }

    return score;
}


function newRound(roundNumber) {
    console.log('');
    console.log(` === 🎲🎲 ROUND ${roundNumber} STARTS 🎲🎲 === `);
    for (let i = 0; i < score.length; i++) {
        let roundScore = rollDice(6, 2);
        console.log(`Player ${i + 1} rolls ...`);
        console.log(roundScore);

        score[i] +=  sumDice(roundScore);
        console.log(`Player ${i + 1} new score: ${score[i]}`);
        console.log('--------------------------------');
    }

}


// THE MAIN PROGRAM
for (let i = 0; i < gameRounds; i++) {
    newRound(i + 1);
}