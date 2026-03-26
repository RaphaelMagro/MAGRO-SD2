// [SECTION] Functions with Parameters 

/* SYNTAX:
function functionName(parameters) {
    // code block
}
 * 
 */

function greeting() {
    let userInput = prompt("Please enter your name: ");
    console.log("Hello, " + userInput + "!");
}

// greeting(); -> sample function calling using basic functions.

// Function with parameters
// name -> is our parameter
// parameters acts as a variable or storage for a specific function.

function sayHello(name) {
    console.log("Hello, " + name + "!");
}

// sayHello(argument) -> is to be passed in the function parameter.
sayHello("Mags");

// Multiple Parameters

function completeName(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}!`);
}

completeName("Mags", "Roe");

// Function with Return Statement
// return will hold a value to be passed outside the function

function print() {
    console.log("Hello World!");
    return "Hello World!";
}

print();



let sum = function(num1, num2) {
    let total = num1 + num2;
    console.log("TOTAL: " + total);
    return total;
}

let result = sum(40, 45);
console.log(result);


// if(sum >= 30) {
//     console.log("Passed!");
// } else {
//     console.log("Failed!");
// }

function checkRemarks (score) {
    if(score >= 75) {
        console.log("Passed!");
    } else {
        console.log("Failed!");
    }
}

checkRemarks(result);

let registration = function(name, age) {
    if (age <= 17) {
        console.log("Sorry " + name + ", you are not eligible to register.");
    } else {
        console.log(`${name}, you are eligible to register!`);
        return age;
    }
}

let value = registration("Mags", 21);
console.log("Age: " + value);

function checkAge(age){
    if (age <= 17){
        console.log("You cannot proceed with registration.");
    } else if (age <= 30){
        console.log("You can proceed with registration.");
    } else {
        console.log("You are too old to register.");
    }
}

checkAge(value);