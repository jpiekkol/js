// // var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // Chars inside variable: letters, numbers, _, $
// // Can not start with number

// // Multi word vars
// var firstName = 'John'; // Camel case
// var first_name = 'Sarah'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname;


// LET
// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST
// const name = 'John';
// console.log(name);
// Can not reassignt CONST
// name = 'Sarah';
// Have to assign a value
// const greeting;


// Can change attributes of a const-object
const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara'

console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);