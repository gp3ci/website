// Using var (global/function scope)
var name = "Alice";
console.log(name);

// Using let (block scope)
let age = 25;
console.log(age);

// Using const (constant value, cannot be reassigned)
const country = "India";  
console.log(country);


let str = "Hello";     // String
let num = 42;          // Number
let isTrue = true;     // Boolean
let nothing = null;    // Null
let notDefined;        // Undefined
let obj = { name: "Alice", age: 25 }; // Object
let arr = [1, 2, 3];   // Array


let a = 10, b = 3;
console.log(a + b);  // Addition: 13
console.log(a - b);  // Subtraction: 7
console.log(a * b);  // Multiplication: 30
console.log(a / b);  // Division: 3.333
console.log(a % b);  // Modulus: 1
console.log(a ** b); // Exponentiation: 1000


let x = 10, y = "10";
console.log(x == y);  // true (value is the same)
console.log(x === y); // false (type is different)
console.log(x > 5);   // true
console.log(x <= 5);  // false


let a = True, b = False;
console.log(a && b);  // false (AND: both must be true)
console.log(a || b);  // true (OR: at least one true)
console.log(!a);      // false (NOT: inverts true to false)


let firstName = "Alice";
let lastName = "Johnson";
console.log(firstName + " " + lastName); // Alice Johnson
