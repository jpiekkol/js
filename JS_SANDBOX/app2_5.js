// Section 5: Numbers & the Math object

const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E; // Euler's e
val = Math.round(2.4);
val = Math.ceil(2.4); // Round up
val = Math.floor(2.8); // Round down
val = Math.sqrt(64);
val = Math.abs(-2);
val = Math.pow(4, 2); // Power
val = Math.min(5, 7, 2, 1);
val = Math.max(5, 2, -2, 1);
val = Math.random();
val = Math.floor(Math.random() * 20 + 1); // Random number between 1 and 20

console.log(val);