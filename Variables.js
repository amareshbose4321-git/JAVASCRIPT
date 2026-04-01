//.........................................Variables in JavaScript...............................................

// =========================
// Variables in JavaScript:
// =========================

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

let name5 = "Amaresh"; // properly declared variable
name2 = "Rahul";       // automatically becomes global
const pi = 3.14;       // value cannot change 
console.log(name5);
console.log(name2);
console.log(pi);


// Global Variable in JavaScript :

// A global variable is a variable that is accessible from anywhere in the program (any function or block).
// It is usually created outside of any function or block.

EX:-1 
let name3 = "Naruto"; // global variable
function greet() {
    console.log(name3); // accessible inside the function
    return name3;
}
greet();
console.log(name3);  // accessible outside the function
console.log(greet()); // using return so we can use greet function.
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


// ===================================================
// Variable Rules in JavaScript with proper examples:
// ===================================================

// Variable names are case sensitive; “a” & “A” is different.
// Only letters, digits, underscore( _ ) and $ is allowed. (not even space)
// Only a letter, underscore( _ ) or $ should be 1st character.
// Reserved words cannot be variable names. (like: let, var, const, if, else, for, while, etc..)


// =================
// proper examples:
// =================

// 1️⃣ Variable names are case sensitive
// "a" and "A" are treated as different variables

let a = 10;
let A = 20;

console.log(a); // Output: 10
console.log(A); // Output: 20


// 2️⃣ Only letters, digits, underscore (_) and $ are allowed

let name1 = "Amaresh";  // ✔ valid (letters + number)
let user_name = "Rahul"; // ✔ valid (underscore)
let $price = 50; // ✔ valid ($ symbol)

// ❌ Invalid examples
// let user name = "Amit";   // space not allowed
// let @price = 30;          // special characters not allowed


// 3️⃣ First character must be a letter, underscore (_) or $

let age1 = 23;    // ✔ valid (starts with letter)
let _count = 5;  // ✔ valid (starts with underscore)
let $total = 100; // ✔ valid (starts with $)

// ❌ Invalid example
// let 1age = 25;   // cannot start with a number


// 4️⃣ Reserved words cannot be used as variable names
// These words are already used by JavaScript

// ❌ Invalid examples
// let let = 10;
// let var = 20;
// let const = 30;
// let if = 40;

// ✔ Correct examples
let studentName = "Amaresh";
let studentAge = 23;

console.log(studentName);
console.log(studentAge);


