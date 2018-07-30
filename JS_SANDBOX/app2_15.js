// Section 2, lecture 15: A Look at the Window Object

// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
// alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure?')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;
console.log(val);

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;
console.log(val);

// Scroll points
val = window.scrollY;
val = window.scrollX;
console.log(val);

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; // Return location in url after "?""
console.log(val);

// Redirect
// window.location.href = 'http://google.com'

// Reload
// window.location.reload();

// History Object
// window.history.go(-1);
val = window.history.length;
console.log(val);

// Navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.platform;
console.log(val);
