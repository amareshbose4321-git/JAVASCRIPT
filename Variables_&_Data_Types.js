//.........................................Variables in JavaScript...............................................

// A variable is a container used to store data.
// The value stored in a variable can be changed later.

// 'let' is used to declare a variable in modern JavaScript

let name = "Amaresh";   // String value (text inside quotes)
let age = 23;           // Number value (integer)
let price = 87.5;       // Number value (decimal / float)
let x = null;           // null means the variable intentionally has no value
let y = undefined;      // undefined means the variable is declared but no value is assigned
let isFollow = false;   // boolean value (it only show "true" or "false")
let isfollow = true;    // boolean value (it only show "true" or "false")

// console.log() prints the output in the browser console
// Here we are printing all variable values

console.log("Name:", name);
console.log("Age:", age);
console.log("Price:", price);
console.log("X value:", x);
console.log("Y value:", y);
console.log("isFollow", isFollow);
console.log("isfollow", isfollow);

let name1 = "Amaresh"; // properly declared variable
name2 = "Rahul";       // automatically becomes global
const pi = 3.14;
console.log(name1);
console.log(name2);
console.log(pi);


// Global Variable in JavaScript :

// A global variable is a variable that is accessible from anywhere in the program (any function or block).
// It is usually created outside of any function or block.

EX:-1 
let name3 = "Naruto"; // global variable
function greet() {
    console.log(name3); // accessible inside the function
}
greet();
console.log(name3); // accessible outside the function

// Here name3 is global, so it can be used everywhere in the program.


// Another Way a Global Variable is Created (Bad Practice):

name4 = "Tanjiro"; // global variable created without let/var/const
console.log(name4);

// This works, but it is not recommended because it can create unexpected bugs.


// | Keyword | Use                      |
// | ------- | ------------------------ |
// | `let`   | variable can change      |
// | `const` | value cannot change      |
// | `var`   | old method (avoid using) |


// Variable Rules:
// Variable names are case sensitive; “a” & “A” is different.
// Only letters, digits, underscore( _ ) and $ is allowed. (not even space)
// Only a letter, underscore( _ ) or $ should be 1st character.
// Reserved words cannot be variable names. (like: let, var, const, if, else, for, while, etc..)

