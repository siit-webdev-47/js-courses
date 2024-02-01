console.log('pick a student loaded...');

const maxNumber = 6;

// GENERATE A NUMBER BETWEEN 0 AND MAX NUMBER - 1
const randomNumber = Math.floor(Math.random() * maxNumber);
console.log(randomNumber);


// if(randomNumber == 0) {
//     alert('Calin');
// }
// else{
//     if(randomNumber == 1) {
//         alert('Adi');
//     }
//     else {
//         if(randomNumber == 2) {
//             alert('Clara');
//         }
//         else {
//             alert('Somebody the closed camera');
//         }
//     }
// }


//  IF ELSE IF
/* -- Multi line comment
if (randomNumber == 0)
    alert('Calin');
else if (randomNumber == 1)
    alert('Adi');
else if (randomNumber == 2)
    alert('Clara');
else if (randomNumber == 3)
    alert('Rares');
else if (randomNumber == 4)
    alert('Dana');
else
    alert('Somebody the closed camera');
*/


// SWITCH STATEMENT
switch (randomNumber) {
    case 0:
        alert('Calin');
        break;

    case 1:
        alert('Adi');
        break;

     case 2:
        alert('Clara');
        break;

     case 3:
        alert('Rares');
        break;

     case 4:
        alert('Dana');
        break;

    default:
        alert('Somebody the closed camera');
        break;
}

