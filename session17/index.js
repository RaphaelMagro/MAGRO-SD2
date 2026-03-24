// [SECTION] Repetition Control Structure

// 1. WHILE loop
/*
SYNTAX:
while (condition) {
    // code block
    // iteration
}
*/

let count = 0;

while (count < 5){
    console.log("WHILE LOOP: " + count);
    count++;
}

// 2. DO-WHILE loop
/*
SYNTAX:
do {
    // code block
    // iteration
} while (condition);
*/

let score = 0;

do {
    console.log("DO-WHILE LOOP: " + score);
    score++;
} while (score < 5);

// 3. FOR loop
/*
SYNTAX:
for (initialization; condition; iteration) {
    // code block
}
*/

for (let i = 0; i < 5; i++) {
    console.log("FOR LOOP: " + i);
}

// combination

for (let i = 0; i < 10; i++) {
    if (i % 3 == 0) {
        console.log("COUNT: " + i + " - divisible by 3.");
    } else {
        console.log("COUNT: " + i);
    }
}

// continue - break
for (let count = 0; count < 20; count++) {
    if (count == 15) {
        console.log("Hello it is me: " + count);
        continue;
    }

    console.log("COUNT: " + count);
}



let isRunning = true;
let accountLocked = 0;
let isLoggedIn = false;
let password = "hello123";

while (isRunning) {
    if(accountLocked != 3) {
        let input = prompt("Enter password: ");
        if (input != password) {
            alert("Incorrect password. Try again. Chances left: " + (2 - accountLocked));
            accountLocked++;
        } else {
            isLoggedIn = true;
            alert("Welcome to your account!");
            isRunning = false;
        }
    } else {
        alert("Your account is locked. Please contact support.");
        isRunning = false;
    }
}

let input = parseInt(prompt("Please enter a number. "));