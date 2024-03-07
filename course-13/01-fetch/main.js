console.log('main.js is loaded');

let authToken;

const loginBtn = document.querySelector(`#login-btn`);
const userNameInput = document.querySelector(`#auth-username`);
const passwordInput = document.querySelector(`#auth-password`);



loginBtn.addEventListener('click', function () {
    console.log(`Should init authentication with credentials: username ${userNameInput.value} and password ${passwordInput.value}`);

    login(userNameInput.value, passwordInput.value);
});


async function login(username, password) {  
    clearLoginErrors();

    const requestBody = {
        "email": username,
        password
    };

    const response = await fetch('https://quiz-api.siit.ro/api/login', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(requestBody)
    });

    //'Response received - must be parsed as a JSON';
    const parsedResponse =  await response.json();

    //Response body is parsed - display the message in the UI
    console.log(parsedResponse);

    if(parsedResponse.errors !== undefined){
        console.log('Authentication error!');

        for(errorField in parsedResponse.errors){
            console.log(errorField, parsedResponse.errors[errorField]);

            const formErrorDiv = document.querySelector(`#${errorField}-error`);
            // formErrorDiv.textContent = parsedResponse.errors[errorField];
            parsedResponse.errors[errorField].forEach(errorMsg => {
                const errorPara = document.createElement('p');
                errorPara.textContent = errorMsg;
                formErrorDiv.append(errorPara)
            });
        }
        
        return;
    }

    // AUTHENTICATION SUCCESSFUL
    getPofileData(parsedResponse.token);
}


function clearLoginErrors(){
    document.querySelectorAll('.error')
        .forEach(elem => elem.textContent = '')
}


async function getPofileData(requestToken){
    const response = await fetch('https://quiz-api.siit.ro/api/profile', {
        method: "GET", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            // "Authorization": `Bearer ${requestToken}`,
        }
    });

    const profileData = await response.json(); 
    console.log(profileData);
}







