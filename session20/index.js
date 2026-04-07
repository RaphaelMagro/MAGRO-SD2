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