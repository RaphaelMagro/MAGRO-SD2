// [SECTION] ARRAY
// Array is a storage for multiple elements/values.
// The best practice is values/elements strored in an array should be of the same data type.

let pokemon = ["Pikachu", "Gusion", "Charmander"];
console.log(pokemon);

console.log(pokemon[0]);
console.log(`My Pokemon is ${pokemon[1]}.`);
console.log(`My Pokemon is ${pokemon[1].toLocaleUpperCase()}.`);
console.log(`My Pokemon is ${pokemon[1].toLocaleLowerCase()}.`);

console.log(pokemon.length);

// Accessing an unidentified index will return undefined.
console.log(pokemon[5]);

// Array Mutation
// Modifying Array Elements

pokemon[3] = "Bulbasaur";
console.log(pokemon);
console.log(pokemon.length);

pokemon[2] = "Charmeleon";
console.log(pokemon);
console.log(pokemon.length);

pokemon[10] = "Koko Dorado";
console.log(pokemon);
console.log(pokemon.length);

// Add an element on the tail of an array without knowing the actual index number.
console.log(pokemon.length);
pokemon[pokemon.length] = "Blastoise";

console.log(pokemon);
pokemon[pokemon.length] = "charlizard";

console.log(pokemon[pokemon.length - 1]);

// [SECTION] Modern Array Mutation Methods
let fruits = ["Banana", "Apple", "Mango"];
console.log(fruits);
// push() -> adds an element at the end of the array.
console.log("Original Array: " + fruits);

fruits.push("Grapes");
console.log("Modified Array using PUSH: " + fruits);

// pop() -> removes the last element of the array and returns the removed element.
console.log(fruits);
console.log("Original Array: " + fruits);
fruits.pop();
fruits.pop();
console.log("Modified Array using POP: " + fruits);

// unshift() -> adds an element at the beginning of the array.
console.log(fruits);
console.log("Original Array: " + fruits);
fruits.unshift("Orange");
console.log("Modified Array using UNSHIFT: " + fruits);

fruits.unshift("Pakwan", "Watermelon", "Melon");
console.log("Modified Array using UNSHIFT: " + fruits);

// shift() -> removes the first element of the array and returns the removed element.
console.log(fruits);
console.log("Original Array: " + fruits);
fruits.shift();
console.log("Modified Array using SHIFT: " + fruits);

// sort() -> sorts the elements of an array in place and returns the sorted array.
console.log(fruits);
console.log("Original Array: " + fruits);
fruits.sort();
console.log("Modified Array using SORT: " + fruits);

// reverse() -> reverses the order of the elements in an array in place and returns the reversed array.
console.log(fruits);
console.log("Original Array: " + fruits);
fruits.reverse();
console.log("Modified Array using REVERSE: " + fruits);

// splice() -> adds and/or removes elements from an array at a specified index.
console.log(fruits);
console.log("Original Array: " + fruits);
fruits.splice(1, 2, "Pechay");
console.log("Modified Array using SPLICE: " + fruits);

// forEach Loop -> executes a provided function once for each array element.
fruits.forEach((fruit) => {
    console.log(fruit);
});