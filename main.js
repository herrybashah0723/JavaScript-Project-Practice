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

// function coffeeOrder(drink) {
//     return `your ${drink} is on its way!`
// }

// const order = coffeeOrder('Latte')
// console.log(order);





//--------------Small Calculator

const value1 = prompt("Enter your first value in Numbers!");
const value2 = prompt("Enter your Second value in Numbers!");

let operator = prompt("Chose your Operator (+, -, *, %, /)")

function calculator(a, b, c) {
    if(c === "-"){
        console.log(a - b);
    } else if (c === "*"){
        console.log(a * b);
        return a*b;
    } else if (c === "/"){
        console.log(a / b);
    } else if (c === "%"){
        console.log(a % b);
    } else {
        console.log(a + b);
    }
}

let cal2 = calculator(value1,value2, operator);
console.log(value1 + operator + value2 + " = " + cal2 );
