// Section 2, Lecture 16: Block Scrope with let & const

// Global Scope
var a = 1;
let b = 2;
const c = 3;

// Function scope
// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }

// test();

// if(true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

for(let a = 0; a < 10; a++){
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);