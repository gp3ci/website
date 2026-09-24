/***************************************
 MODERN JAVASCRIPT (ES6+) — MASTER FILE
***************************************/

/* -----------------------------
   1. VARIABLES: let vs const
------------------------------*/
let username = "Rahul";
const site = "MyApp";

// username can be updated
username = "Asha";

// site = "NewApp"; // ❌ Error: Assignment not allowed

console.log("User:", username);
console.log("Website:", site);


/* -----------------------------
   2. ARROW FUNCTIONS
------------------------------*/
const greet = (name) => {
  return `Hello ${name}`;
};
console.log(greet(username));


/* -----------------------------
   3. TEMPLATE LITERALS
------------------------------*/
let age = 22;
let message = `User ${username} is
 ${age} years old.`;
console.log(message);


/* -----------------------------
   4. OBJECT DESTRUCTURING
------------------------------*/
const student = {
  roll: 101,
  course: "MERN",
  city: "Hyderabad"
};
const { roll, course } = student;
console.log("Roll:", roll);
console.log("Course:", course);


/* -----------------------------
   5. ARRAY DESTRUCTURING
------------------------------*/
const colors = ["Red", "Blue", "Green"];
const [firstColor] = colors;
console.log("Primary Color:",
   firstColor);

/* -----------------------------
   6. SPREAD OPERATOR
------------------------------*/
const backend = ["NodeJS", "MongoDB"];
const frontend = ["HTML", "CSS", "React"];
const fullStack = [...frontend, ...backend];

console.log("Full Stack Tools:",
    fullStack);


/* -----------------------------
   7. REST PARAMETER
------------------------------*/
const calculateTotal = (...prices) => {
  let total = prices.reduce((sum, value) => sum + value);
  return total;
};    
console.log("Total Amount:", 
   calculateTotal(100, 200, 150));


/* -----------------------------
   8. CALLBACK FUNCTION
------------------------------*/
function loadPage(callback) {
  console.log("Loading page...");
  callback();
}
loadPage(() => {
  console.log("Page loaded!");
});


/* -----------------------------
   9. PROMISE
------------------------------*/
const payment = new Promise((resolve, reject) => {
  let success = true;
  if (success)
    resolve("Payment Successful");
  else
    reject("Payment Failed");
});
payment
  .then(res => console.log(res))
  .catch(err => console.log(err));

/* -----------------------------
   10. ASYNC / AWAIT
------------------------------*/
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    console.log("Users:", users);
  } catch (error) {
    console.log("Error:", error);
  }
}
fetchData();


/* -----------------------------
   11. MODULE EXPORT EXAMPLE
------------------------------*/
// export function add(a, b) {
//   return a + b;
// }

// import { add } from "./math.js";

/* Example usage */
// console.log(add(5, 3));


/* -----------------------------
   12. DOM MANIPULATION (Browser)
------------------------------*/
// REQUIRED HTML ELEMENT: <h1 id="title"></h1>

document.getElementById("title").innerText = "Welcome to Modern JavaScript";


/* -----------------------------
   13. EVENT HANDLING
------------------------------*/
// REQUIRED HTML BUTTON: <button id="btn">Click</button>
document.getElementById("btn").addEventListener("click", () => {
  alert("Button Clicked!");
});


/* -----------------------------
   14. FETCH API
------------------------------*/
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log("Post:", data));


/* -----------------------------
   15. ERROR HANDLING
------------------------------*/
try {
  let result = divide(10, 0); // ❌ undefined function
} catch (e) {
  console.log("Error:", e.message);
}


/* -----------------------------
   16. JSON CONVERSION
------------------------------*/
const order = {
  id: 1,
  item: "Laptop"
}; 
// Convert JS to JSON
const jsonString = JSON.stringify(order);
// Convert JSON to JS
const parsed = JSON.parse(jsonString);

console.log("JSON:", jsonString);
console.log("Parsed:", parsed);


/* -----------------------------
   17. HOISTING DEMO
------------------------------*/
console.log(total);  
var total = 100;   

// let & const DO NOT HOIST the same way


/* -----------------------------
   18. CLOSURE DEMO
------------------------------*/
function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

let counter = outer();
counter();
counter();


/* -----------------------------
   19. EVENT LOOP DEMO
------------------------------*/
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 0);

console.log("End");


/* -----------------------------
   20. CONSOLE TOOLS
------------------------------*/
console.log("Info");
console.warn("Warning");
console.error("Error");

const tableData = [
  { name: "Asha", age: 21 },
  { name: "Ravi", age: 22 }
];

console.table(tableData);

console.time("Loop");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Loop");
