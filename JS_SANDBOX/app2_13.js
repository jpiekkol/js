// Section 2, Lecture 13: Function declarations and expressions

// FUNCTION DECLARATIONS
function greet(firstName = 'John', lastName = 'Doe'){
  //console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet('Matt'));

// FUNCTION EXPRESSIONS
const square = function(x = 3){
  return x*x;
};
console.log(square(64));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
(function(){
  console.log('IIFE Ran..');
})();

(function(name){
    console.log('IIFE Ran from..' + name);
  })('Brad');

// PROPERTY METHODS
const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`)
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
console.log('Delete todo...');