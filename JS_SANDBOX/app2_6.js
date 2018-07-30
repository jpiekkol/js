// Section 6: String Methods & Concatenation

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad'

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName
console.log(val);

// Append
val = 'Brad ';
val += 'Traversy';

console.log(val);

val = 'Hello, my name is ' + firstName + ' and I am ' + age;
console.log(val);

// Escaping
val = "That's awesome, I can't wait";

val = 'That\'s awesome, I can\'t wait';
console.log(val);

// Length
val = firstName.length;
console.log(val);

// concat()
val = firstName.concat(' ', lastName);
console.log(val);

// Change case
val = firstName.toUpperCase();
console.log(val);

val = firstName.toLowerCase();
console.log(val)

// Indexing
val = firstName[0];
console.log(val);

// indexOf() gives index of first occurrance
val = firstName.indexOf('l');
console.log(val);

// lastIndexOf()
val = firstName.lastIndexOf('l');
console.log(val);

// charAt() gives value at index number
val = firstName.charAt('2');
console.log(val);

// Get last char
val = firstName.charAt(firstName.length - 1);
console.log(val);

// substring()
val = firstName.substring(0, 4);
console.log(val)

// slice()
val = firstName.slice(-3);
console.log(val);

// split()
val = str.split(' ');
console.log(val);

// replace()
val = str.replace('Brad', 'Jack');
console.log(val);

// includes()
val = str.includes('my');
console.log(val);