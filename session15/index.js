/*
Discussion Topic List:

1. Arithmetic Operators
Addition Operator (+)
Subtraction Operator (-)
Multiplication Operator (*)
Division Operator (/)

2. Assignment Operators
Basic Assignment Operator (=)
Addition Assignment Operator (+=)
Subtraction Assignment Operator (-=)
Multiple Operators and Parentheses

3. Increment and Decrement
Increment Operator (++)
Decrement Operator (--)

4. Type Coercion

5. Comparison Operators
Equality Operator (==)
Inequality Operator (!=)
Strict Equality Operator (===)
Strict Inequality Operator (!==)

5. Relational Operators
Greater Than Operator (>)
Greater Than or Equal To Operator (>=)
Less Than Operator (<)
Less Than or Equal To Operator (<=)

6. Logical Operators
Logical AND Operator (&&)
Logical OR Operator (||)
Logical NOT Operator (!)
*/

// [SECTION] Arithmetic Operators
let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
console.log("The sum is: " + sum);

let difference = num1 - num2;
console.log("The difference is: " + difference);

let product = num1 * num2;
console.log("The product is: " + product);

let quotient = num1 / num2;
console.log("The quotient is: " + quotient);

let modulo = num1 % num2;
console.log("The modulo is: " + modulo);

// [SECTION] Assignment Operators
let num4 = 15;
let num5 = 8;

num4 += num4;
console.log("After addition assignment, num4 is: " + num4);

num4 += num5;
console.log("After addition assignment, num4 is: " + num4);

// [SECTION] Increment and Decrement
// Inc = ++ | let age = 10; age++ | console.log(age) -> 11
// Dec = --

// Pre-increment
let days = 5;
console.log("Original days: " + days);

++days;
console.log("After pre-increment-1, days is: " + days);

++days;
console.log("After pre-increment-2, days is: " + days);

// Post-increment
let hours = 3;
console.log("Original hours: " + hours);

hours++;
console.log("After post-increment-1, hours is: " + hours);

hours++;
console.log("After post-increment-2, hours is: " + hours);

// Pre-increment
let days2 = 5;
console.log("Original days2: " + days2);

--days2;
console.log("After pre-decrement-1, days2 is: " + days2);

--days2;
console.log("After pre-decrement-2, days2 is: " + days2);

// Post-increment
let hours2 = 3;
console.log("Original hours2: " + hours2);

hours2--;
console.log("After post-decrement-1, hours2 is: " + hours2);

hours2--;
console.log("After post-decrement-2, hours2 is: " + hours2);

// [SECTION] Comparison Operators

let num6 = 10;
let num7 = 12;
let num8 = "10";

// Equality Operator (==)
let equality = num6 == num7;
console.log("Equality Operator: " + equality);

let equality2 = num6 == num8;
console.log("Equality Operator: " + equality2);

// Strict Equality Operator (===)
let sequality = num6 === num7;
console.log("Strict Equality Operator: " + sequality);

let sequality2 = num6 === num8;
console.log("Strict Equality Operator: " + sequality2);

// Not Equal Operator (!=)
let notEqual = num6 != num7;
console.log("Not Equal Operator: " + notEqual);

let notEqual2 = num6 != num8;
console.log("Not Equal Operator: " + notEqual2);

// Strict Inequality Operator (!==)
let snotEqual = num6 !== num7;
console.log("Strict Inequality Operator: " + snotEqual);

let snotEqual2 = num6 !== num8;
console.log("Strict Inequality Operator: " + snotEqual2);

// [SECTION] Relational Operators

let num9 = 25;
let num10 = 15;

console.log("Greater Than: ", num9 > num10);
console.log("Less Than: ", num9 < num10);
console.log("Greater Than or Equal To: ", num9 >= num10);
console.log("Less Than or Equal To: ", num9 <= num10);

// [SECTION] Logical Operators

let isLegalAge = true, isMarried = false, isVoter = true;

// Logical AND Operator (&&)
console.log("Logical AND: ", isLegalAge && isMarried && isVoter);

// Logical OR Operator (||)
console.log("Logical OR: ", isLegalAge || isMarried || isVoter);

// Logical NOT Operator (!)
console.log("Logical NOT: ", !isMarried);

// [SECTION] Large Scale Data Types
// Arrays -> can store multiple elements or values.
// Values should be of the same data type
let array = [10, 20, 30];
let names = ["Alice", "Bob", "Charlie"];

console.log("Array: ", array);
console.log("Names: ", names);

let mixedArr = ["John", 3, true];
console.log("Mixed Array: ", mixedArr);

// Objects -> consists of key or property and a paired value. It is used to store data in a structured way.
let user = {
    name: "Francisco",
    gradeLevel: 3,
    isEnrolled: true
}
console.log("User: ", user);

// [SECTION] Alert vs Prompt

alert("Hello, World!");
console.log("Hello"); 

let completeName = prompt("What is your name?");
console.log("Hello! " + completeName);

let input1 = parseInt(prompt("Enter the first number: "));
let input2 = parseInt(prompt("Enter the second number: "));

let sum3 = input1 + input2;
console.log("The sum is: " + sum3);



