// Section 2, Lecture 8

// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear']
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()]

console.log(mixed);

let val;

// Get array length
val = numbers.length;
console.log(numbers);
console.log(val);

// Check if is array
val = Array.isArray(numbers);
console.log(numbers);
console.log(val);

// Get single value
val = numbers[3];
console.log(numbers);
console.log(val);

// Insert into array
numbers[2] = 100;
console.log(numbers);
console.log(val);

// Find index of value
val = numbers.indexOf(36);
console.log(numbers);
console.log(val);

// Mutating arrays
// Add on to end
numbers.push(250);
console.log(numbers);
console.log(val);

// Add on to front
numbers.unshift(120);
console.log(numbers);
console.log(val);

// Take off from end
numbers.pop();
console.log(numbers);
console.log(val);

// Take off from front
numbers.shift();
console.log(numbers);
console.log(val);

// Splice values
numbers.splice(1,1);
console.log(numbers);
console.log(val);

// Reverse array
numbers.reverse();
console.log(numbers);
console.log(val);

// Concat arrays
val = numbers.concat(numbers2);
console.log(numbers);
console.log(val);

// Sorting arrays
val = fruit.sort();
console.log(fruit);
console.log(val);

// Use the compare function to sort numbers
val = numbers.sort(function(x, y){
  return x - y;
});
console.log(numbers);
console.log(val);

// Reverse sort
val = numbers.sort(function(x, y){
  return y - x;
});
console.log(numbers);
console.log(val);

// Find
function under50(num){
  return num < 50;
}

val = numbers.find(under50);
console.log(numbers);
console.log(val);

