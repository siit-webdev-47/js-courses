const nr1Elem = document.querySelector('#nr-1');
const nr2Elem = document.querySelector('#nr-2');

const generateNumber = (maxValue = 100) => Math.floor(Math.random() * maxValue);

function newRound(){
    const nr1 = generateNumber();
    nr1Elem.textContent = nr1;
    
    const nr2 = generateNumber();
    nr2Elem.textContent = nr2;

    const correctAnswer = nr1 + nr2;

    // generating the answers and  displaying them in the UI
    const answers = generateAnswers(correctAnswer);
    const answerElems = document.querySelectorAll('.option');
    for (let i = 0; i < answers.length; i++) {
        answerElems[i].textContent = answers[i];
    }
}


function generateAnswers(correctValue){
    const result = [correctValue];

    while (result.length < 3) {
        const newValue = generateNumber(200);

        if(result.includes(newValue) === false){
            result.push(newValue);
        }
    }

    const shuffledResult = shuffleArrayElements(result);
    return shuffledResult;
}


function shuffleArrayElements(array){
    for (let i = 0; i < 10; i++) {
        const index1 = Math.floor(Math.random() * array.length);
        const index2 = Math.floor(Math.random() * array.length);
    
        const aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
        
    }

    return array;
}


function choseOption(evt){
    console.log(evt);

    const clickedDomElem = evt.target;
    console.log(clickedDomElem.textContent);
}