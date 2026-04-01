//.........................................Data Types in JavaScript...............................................

// =========================
// Data Types in JavaScript:
// =========================

// Two types : Primitivie and Non-Primitivie data types

// ✅ Simple Rule
// Primitive Types → store single values (number, string, boolean)
// Non-Primitive Types → store multiple or complex values

// =====================================
// Primitivie data types in JavaScript:
// =====================================

// 7 Primitivie data types in JS:

// | Data Type | Example         |
// | --------- | --------------- |
// | Number    | `23`, `87.5`    |
// | String    | `"Amaresh"`     |
// | Boolean   | `true`, `false` |
// | Undefined | `let x;`        |
// | Null      | `let y = null`  |
// | BigInt    | `123456789n`    |
// | Symbol    | `Symbol("id")`  |

// Data Types tell JavaScript what type of data a variable stores.
// Example: number, text, true/false, etc.

// 1️⃣ Number
// Used to store numbers (integer or decimal).

let age2 = 23;      // integer number
let price1 = 87.5;  // decimal number

console.log(age2);
console.log(price1);

// 2️⃣ String
// Used to store text. Strings are written inside quotes " " or ' '.

let name4 = "Amaresh";
let city = 'Kolkata';

console.log(name4);
console.log(city);

// 3️⃣ Boolean
// Used to store true or false values.

let isStudent = true;
let isLoggedIn = false;

console.log(isStudent);
console.log(isLoggedIn);

// 4️⃣ Undefined
// A variable that is declared but not assigned a value.

let x1;

console.log(x1); // undefined

// 5️⃣ Null
// Represents an empty or intentional absence of value.

let y1 = null;

console.log(y1);

// 6️⃣ BigInt
// Used for very large numbers.

let bigNumber = 12345678901234567890n;

console.log(bigNumber);

// 7️⃣ Symbol
// Used to create unique identifiers.

let id = Symbol("id");

console.log(id);

// EX - 1:
const nameKey = Symbol("nameKey"); 
// Create a unique Symbol used as a key for storing the name

const user = {
    [nameKey] : "Amaresh"
    // Use the Symbol as a key (not a normal string key)
    // Stores "Amaresh" in a hidden/unique property
};

const uniqueID = Symbol("uniqueID"); 
// Create another Symbol to store user ID

user[uniqueID] = 101; 
// Add a new property to user object using Symbol key
// Stores ID value 101

let inputName = prompt("Enter your name"); 
// Ask user to enter their name (works in browser)
// Store the input value in variable inputName

if (inputName === user[nameKey]){
    // Compare user input with stored name (Amaresh)
    // user[nameKey] accesses value using Symbol key

    console.log("Your id is: ", user[uniqueID]); 
    // If names match, print the user ID (101)

} else {
    console.log("Wrong User"); 
    // If names don't match, show error message
}


// ========================================
// Non-Primitivie data types in JavaScript:
// ========================================

// Non-Primitive data types are used to store collections of values or more complex data.
// They are also called Reference Types.

// Common Non-Primitive Types:

// Object
// Array
// Function

// 1️⃣ Object
// An object stores data in key–value pairs.

// Object example

let student = {
    name: "Amaresh",
    age: 23,
    city: "Kolkata"
};

console.log(student);        // prints whole object
console.log(student.name);   // access specific value
console.log(student.age);
console.log(student.city);

// 2️⃣ Array
// An array stores multiple values in a single variable.

// Array example

let fruits = ["Apple", "Mango", "Banana", "Orange"];

console.log(fruits);      // prints all fruits
console.log(fruits[0]);   // first element
console.log(fruits[2]);   // third element

// 3️⃣ Function
// A function is a block of code that performs a task.

// Function example
// EX -1
function greet() {
    console.log("Hello Amaresh");
}

greet(); // calling the function

// EX -2
function sum(x , y){
    let c = x+y;
    console.log(c);
    return c;
}
sum(2,3);

// Summary Table
// | Type     | Example                      |
// | -------- | ---------------------------- |
// | Object   | `{name:"Amaresh", age:23}`   |
// | Array    | `["Apple","Mango","Banana"]` |
// | Function | `function greet(){}`         |
