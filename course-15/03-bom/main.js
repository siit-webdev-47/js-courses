console.log('BOM');

console.log(window);

const closeBtn = document.querySelector(`#close-btn`);
closeBtn.addEventListener('click', () => window.close());

const newBtn = document.querySelector(`#new-btn`);
newBtn.addEventListener('click', () => window.open());

const printBtn = document.querySelector(`#print-btn`);
printBtn.addEventListener('click', () => window.print());


const uiComponents = document.querySelectorAll(`.component`);


window.addEventListener("hashchange",
    () => {
        const urlHash = document.location.hash;
        
        // hide all
        uiComponents.forEach(elem => elem.classList.add('hidden'));

        // display the selected component
        console.log(urlHash);
        const selectedComponent = document.querySelector(`${urlHash}-component`);
        selectedComponent.classList.remove('hidden');
        console.log(selectedComponent);
    }
);


let secretMsg = localStorage.getItem('siit-41');
console.log(secretMsg, typeof secretMsg);

const msg = JSON.parse(secretMsg);
console.log(secretMsg, typeof msg);

alert(msg.message);