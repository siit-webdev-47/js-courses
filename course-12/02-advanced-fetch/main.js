console.log('Ready to fetch...');


// Example POST method implementation:
async function authenticateUser() {
    const url = 'https://quiz-api.siit.ro/api/login';
    const submittedData = {
        "email": "test@test.com",
        "password": "123456"
    };


    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(submittedData), // body data type must match "Content-Type" header
    });

    const serverResponseAsJSON = await response.json(); // parses JSON response into native JavaScript objects
    console.log(serverResponseAsJSON);
}

authenticateUser();