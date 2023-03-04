// ----------while lopp Game

// const maxValue = 10;
// const randomNumber = Math.floor(Math.random()*maxValue) + 1;
// let status = false;

// while (!status) {
//     let userInput = prompt("Guess a number between 1 and " + maxValue)
//     userInput = Number(userInput);
//     if (userInput === randomNumber){
//         status = true;
//         console.log("You won! The number was " + randomNumber);
//     } else if ( userInput > randomNumber ) {
//         console.log("Sorry, your guess is too high.");
//     } else {
//         console.log("Sorry, your guess was too low.");
//     }
// }




// -------------Functions

function coffeeOrder(drink) {
    return `your ${drink} is on its way!`
}

const order = coffeeOrder('Latte')
console.log(order);