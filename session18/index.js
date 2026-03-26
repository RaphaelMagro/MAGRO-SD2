// [SECTION] JS FUNCTIONS
// PERFORMS SPECIFIC TASKS AND ELIMINATE REPETITIVE CODES

// SYNTAX
// function functionName(parameters) {
//     // code block
// }

// console.log("Hello World!");+
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");

// function sayHello() {
//     console.log("Hi im Racisto!");
// }

// // invocation of function
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();

// function showAlert() {
//     alert("This is an alert!");
// }

// showAlert();

// function startCalc() {
//     let userInput = parseInt(prompt("Please select an Operation: \n(1) Addition \n(2) Subtraction \n(3) Multiplication"));
//     let num1 = parseInt(prompt("Please enter the first number: "));
//     let num2 = parseInt(prompt("Please enter the second number: "));

//     if (userInput == 1) {
//         let sum = num1 + num2;
//         alert("The sum is: " + sum);
//     } else if (userInput == 2) {
//         let difference = num1 - num2;
//         alert("The difference is: " + difference);
//     } else if (userInput == 3) {
//         let product = num1 * num2;
//         alert("The product is: " + product);
//     } else {
//         alert("Invalid input! Please select a valid operation.");
//     }
// }

// startCalc();

let num1 = 0, num2 = 0;
let userInput = 0;

function startCalc() {
    let userInput = parseInt(prompt("Please select an Operation: \n(1) Input Numbers  \n(2) Sum \n(3) Subtraction \n(4) Multiplication \n(5) Division \n(6) Modulo\n(7) Reset \n(8) Exit")); 

    switch (userInput) {
        case 1:
            enterNumbers();
            break;
        case 2:
            sum();
            break;
        case 3:
            subtraction();
            break;
        case 4:
            multiplication();
            break;
        case 5:
            division();
            break;
        case 6:
            modulo();
            break;
        case 7:
            reset();
            break;
        case 8:
            exit();
            break;
        default:
            alert("Invalid input! Please select a valid operation.");
    }
}

function enterNumbers() {
    let inputNum1 = parseFloat(prompt("Please enter the first number: "));
    let inputNum2 = parseFloat(prompt("Please enter the second number: "));
    num1 = inputNum1;
    num2 = inputNum2;
}


function sum() {
    if (num1 == 0 || num2 == 0) {
        alert("Please enter both numbers first.");
    } else {
        let sum = num1 + num2;
        alert(`The numbers you entered are ${num1} and ${num2}.
            \nThe sum of ${num1} and ${num2} is ${sum}.`);
    }
}

function subtraction() {
    if (num1 == 0 || num2 == 0) {
        alert("Please enter both numbers first.");
    } else {
        let difference = num1 - num2;
        alert(`The numbers you entered are ${num1} and ${num2}.
            \nThe difference of ${num1} and ${num2} is ${difference}.`);
    }
}

function multiplication() {
    if (num1 == 0 || num2 == 0) {
        alert("Please enter both numbers first.");
    } else {
        let product = num1 * num2;
        alert(`The numbers you entered are ${num1} and ${num2}.
            \nThe product of ${num1} and ${num2} is ${product}.`);
    }
}

function division() {
    if (num1 == 0 || num2 == 0) {
        alert("Please enter both numbers first.");
    } else {
        let quotient = num1 / num2;
        alert(`The numbers you entered are ${num1} and ${num2}.
            \nThe quotient of ${num1} and ${num2} is ${quotient}.`);
    }
}

function modulo() {
    if (num1 == 0 || num2 == 0) {
        alert("Please enter both numbers first.");
    } else {
        let remainder = num1 % num2;
        alert(`The numbers you entered are ${num1} and ${num2}.
            \nThe remainder of ${num1} and ${num2} is ${remainder}.`);
    }
}

function reset() {
    num1 = 0;
    num2 = 0;
    alert("Numbers have been reset.");
}

function exit() {
    alert("Thank you for using the calculator. Goodbye!");
}

do {
    startCalc();
} while (userInput != 8);

