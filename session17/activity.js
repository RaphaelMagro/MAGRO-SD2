
let input = parseInt(prompt("Please enter a number. "));

for (let i = 1; i <= input; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log("COUNT: " + i + " - COCO");
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log("COUNT: " + i + " - MELON");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("COUNT: " + i + " - COCO MELON");
    } else {
        console.log("COUNT: " + i);
    }
}