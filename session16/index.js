console.log("Hello World!");

// [SECTION] Selection Control Structure
// 1. if-else else-if statement

let age = 21;
if (age >= 18) {
    console.log("You are eligible for driver's license.");
}

let city = "cebu";
if (city == "manila") {
    console.log("Welcome to the capital city of the Philippines!");
} else {
    console.log("The selected area is not in Manila.");
}

if (age >= 18 && city == "cebu") {
    console.log("You can register for the event.");
} else if (age <= 18) {
    console.log("You are not eligible to register for the event.");
} else {
    console.log("All criteria not met.");
}

/*
let role = prompt("Enter your role (admin, student, or teacher):").toLocaleLowerCase();

if (role == "admin") {
    alert("Welcome to UA Portal, Admin! You have full access.");
} else if (role == "teacher") {
    alert("Welcome to UA Portal, Teacher! You have access to the teacher's faculty.");
} else if (role == "student") {
    alert("Welcome, Assumptionist!.");
} else {
    alert("Invalid role. Please enter admin, student, or teacher.");
}
*/



// 2. switch-case statement

let day = 4;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Please enter 1-5 only.");
        break;
}

let role = prompt("Enter your role (admin, student, or teacher):").toLocaleLowerCase();

switch (role) {
    case "admin":
        alert("Welcome to UA Portal, Admin! You have full access.");
        break;
    case "teacher":
        alert("Welcome to UA Portal, Teacher! You have access to the teacher's faculty.");
        break;
    case "student":
        alert("Welcome, Assumptionist!.");
        break;
    default:
        alert("Invalid role. Please enter admin, student, or teacher.");
        break;
}
