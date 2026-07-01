

// 1)  call back function :-A callback function is a function passed into another function as an argument, which is then executed (or "called back") inside that outer function.
//
// When you pass a callback, you pass the function reference (its name) without parentheses (). 
// Adding parentheses would execute the function immediately instead of waiting for the outer function to trigger it.

// ex;-1
        function greet(name){
    console.log(`Hello `+name);
};
function lokesh(callback){
    let name= "Hari Charan";
    callback(name);
};
lokesh(greet);

// ex:-2

function greet(name, callback) {
  console.log("1a. Hello, " + name);
  callback(); // invoke the callback
}

function sayBye() {
  console.log("1a. Goodbye!");
}

greet("Alice", sayBye);
// Output:
// Hello, Alice
// Goodbye!

// 1b. Anonymous function as callback
greet("Bob", function () {
  console.log("1b. See you later!");
});

// 1c. Arrow function as callback
greet("Charlie", () => console.log("1c. Take care!"));


// // //  2) setTimeout :-setTimeout is a built-in JavaScript tool used to run a specific piece of code after a certain amount of time has passed.
// The code takes two main things:-
//a) The function (the code you want to run).
//b)The delay (how long to wait, written in milliseconds).(Note: 1000 milliseconds = 1 second)
// 

setTimeout(()=>{ console.log("step-1");
setTimeout(()=> {console.log("step-2");
setTimeout(()=>{console.log("step-3");},1000);},1000);
},1000);


// Promises

// A promise is placeholder for a future value

// Pending waiting
// Fulfilled Success --->
// Rejected Failed -->

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

  Promise.resolve("Step 1")
    .then(res => {
        console.log(res)
        return "Step 2"
    })
    .then(res =>{
        console.log(res)
        return "Step 3"

    })
    .then(console.log)
// example-1
function fetchData(resolve,reject){
    return new Promise(resolve =>{
        setTimeout(() =>{
            console.log("Data received")
            resolve("Sucessfull")
        },2000)
    })
}
fetchData().then(data=>{console.log(data)})

// example-2
function fetchData(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve("Data Received")
        },2000)
    })
}

async function getData(){
    console.log("Fetching ...")
    let result = await fetchData()
    console.log(result)
}
getData()


async function loadData()
{
    try {
        let result = await fetchData()
        console.log(result)
    } catch(error){
        console.log("Error", error)
    }
}
loadData()

       // // currying 
      // // Curring transforms a fucntion that takes multiple arugments into a sequence of fucntions that each take ONE arugment
     // // 2a. Normal function vs curried function
      function addnormal(a,b){
        return a+b;
      }
      console.log(" 1)normal add:",addnormal(2,3));
      // // Curried version: returns a new function for each argument
        function addcurried(a){
            return function(b){
                return a+b;
            }
        };
        console.log(" 2)curried add:",addcurried(2)(3));  // by using curried function we can call the function in a sequence of functions that each take one argument
    
        // // 3. Arrow function currying (concise syntax)
                
        const multiply=(a)=>(b)=>a*b;
        console.log(" 3)curried multiply:",multiply(2)(3)); 

         const double = multiply(2); // partial application
         const triple = multiply(3);

         console.log(" 4)double:",double(5)); //10
         console.log(" 5)triple:",triple(5)); //15

        // // 4. Partial Application — fixing some arguments early
        const power = (base) => (exponent) => Math.pow(base, exponent);
        const square = power(2); //2^n
        const cube= power(3); //3^n
        console.log("4) square:",square(3));   // 8
        console.log("5) cube:",cube(3));       // 27

        // // 5 curried greeting - reusable template
            const greet=(greeting)=>(title)=>(name)=> `${greeting},${title}${name}`;

            const sayhello=greet("hello");
            const sayhi=greet("hi");

            const sayhellomr=sayhello("mr.");
            const sayhidr=sayhi("dr.");

            console.log("5)",sayhellomr("lokesh"));
            console.log("6)",sayhidr("lokesh"));
        
// 7) Currying in array pipelines
const users = [
  { name: "Alice", role: "admin",  score: 95 },
  { name: "Bob",   role: "user",   score: 70 },
  { name: "Carol", role: "admin",  score: 88 },
  { name: "Dave",  role: "user",   score: 60 },
];

const hasRole = (role) => (user) => user.role === role;
const aboveScore = (min) => (user) => user.score >= min;
const getName = (user) => user.name;

const admins     = users.filter(hasRole("admin")).map(getName);
const topScorers = users.filter(aboveScore(80)).map(getName);

console.log("7) admins:", admins);       // ['Alice', 'Carol']
console.log("8) top scorers:", topScorers); // ['Alice', 'Carol']


//currying converts f(a,b,c) into f(a)(b)(c)
// currying reusable, composable

// Currying useful when you have repeated calls with one fixed arg



// // ─────────────────────────────────────────────
// //  3 HOISTING
// // ─────────────────────────────────────────────


// Hositing is JS behavour of moving declarations to top of their scope before the code executes
// 3a. Function Declaration Hoisting — can call BEFORE definition
function sayHi(name) {
    return `Hi, ${name}!`;
}
console.log("3a.",sayHi("Alice")); // works perfectly!

// Function declarations are fully hoisted — name AND body

// 3b. var hoisting — declared but NOT initialized
console.log("3b. var before declaration:", x); // undefined (NOT an error)
var x = 10;
console.log("3b. var after declaration:", x);  // 10

// What JS actually does internally:
// var x;           ← declaration hoisted to top
// console.log(x);  ← sees undefined (declared but no value yet)
// x = 10;          ← assignment stays in place

// 3c. let and const — Temporal Dead Zone (TDZ)
try {
  console.log("3c. let before declaration:", y); // ReferenceError!
} catch (e) {
  console.log("3c. TDZ error:", e.message);
}
let y = 20;
console.log("3c. let after declaration:", y); // 20

// let and const ARE hoisted but NOT initialized.
// The gap between scope start and declaration = Temporal Dead Zone.
// Accessing in TDZ = ReferenceError.

// 3d. const hoisting — same TDZ behavior as let
try {
  console.log("3d. const before declaration:", PI);
} catch (e) {
  console.log("3d. TDZ error for const:", e.message);
}
const PI = 3.14159;
console.log("3d. PI:", PI);


// 3e. Function Expression with var — only var is hoisted, NOT the function
try {
  console.log("3e. var fn before assignment:", addExpr(2, 3));
} catch (e) {
  console.log("3e. Error:", e.message); // TypeError: addExpr is not a function
}
var addExpr = function (a, b) {
  return a + b;
};
// var addExpr is hoisted as `undefined`; calling undefined() → TypeError

// 3f. Function Expression with let/const
try {
  multiplyExpr(2, 3);
} catch (e) {
  console.log("3f. let fn expression error:", e.message); // ReferenceError (TDZ)
}
const multiplyExpr = (a, b) => a * b;

// 3g. Hoisting order: functions take priority over var
var foo = "variable";

function foo() {  // same name as var above
  return "function";
}

// During hoisting: function foo is hoisted first, then var foo
// (var foo doesn't re-declare it, but the assignment overwrites it)
console.log("3g. foo:", foo); // "variable" — assignment overwrites function

// 3h. Hoisting inside blocks
function blockHoisting() {
  console.log("3h. a:", typeof a); // "undefined" — var ignores block scope
  if (true) {
    var a = "inside block";
  }
  console.log("3h. a after block:", a); // "inside block" — var leaks out!

  // let/const do NOT leak:
  if (true) {
    let b = "block scoped";
    const c = "also block scoped";
  }
  try {
    console.log(b); // ReferenceError
  } catch (e) {
    console.log("3h. let b not accessible outside block:", e.message);
  }
}
blockHoisting();

// 3i. Practical hoisting trap — loop with var
console.log("3i. var loop (broken closures):");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("  var i:", i), 100); // prints 3, 3, 3
}

console.log("3i. let loop (correct closures):");
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("  let j:", j), 200); // prints 0, 1, 2
}
// var i is shared across all iterations (hoisted to function scope)
// let j creates a NEW binding per iteration


// ─────────────────────────────────────────────
//  PART 4 — THE EVENT LOOP
// ─────────────────────────────────────────────

// 4a. The fundamental order: sync → microtasks → macrotasks
console.log("4a. [1] Synchronous — runs first");

setTimeout(() => console.log("4a. [4] setTimeout — macrotask queue"), 0);

Promise.resolve().then(() => console.log("4a. [3] Promise.then — microtask queue"));

console.log("4a. [2] Synchronous — runs second");

// Output order:
// [1] Synchronous — runs first
// [2] Synchronous — runs second
// [3] Promise.then — microtask queue   ← microtasks before macrotasks!
// [4] setTimeout — macrotask queue


// 4b. Multiple microtasks drain completely before any macrotask
setTimeout(() => console.log("4b. macrotask 1"), 0);
setTimeout(() => console.log("4b. macrotask 2"), 0);

Promise.resolve()
  .then(() => console.log("4b. microtask 1"))
  .then(() => console.log("4b. microtask 2"))
  .then(() => console.log("4b. microtask 3"));

// Output: microtask 1, 2, 3 — then macrotask 1, 2

// 4c. queueMicrotask — add to microtask queue directly
console.log("4c. sync start");
queueMicrotask(() => console.log("4c. microtask via queueMicrotask"));
console.log("4c. sync end");
// Output: sync start → sync end → microtask via queueMicrotask

// 4d. Call Stack demonstration — synchronous execution
function first() {
  console.log("4d. inside first()");
  second();
  console.log("4d. back in first()");
}
function second() {
  console.log("4d. inside second()");
  third();
}
function third() {
  console.log("4d. inside third()");
}
first();
// Call stack order: first → second → third → (pop) → back in second → (pop) → back in first



// 4e. Stack overflow — recursive call without base case
function infinite() {
  return infinite(); // calls itself forever
}
try {
  infinite();
} catch (e) {
  console.log("4e. Stack overflow caught:", e.message);
}


// 4f. Event loop with mixed timers — order is not always intuitive
console.log("4f. --- mixed timer order ---");

setTimeout(() => console.log("4f. timeout 0ms"), 0);
setTimeout(() => console.log("4f. timeout 100ms"), 100);

Promise.resolve().then(() => {
  console.log("4f. microtask A");
  setTimeout(() => console.log("4f. timeout inside microtask"), 0);
  return Promise.resolve();
}).then(() => console.log("4f. microtask B"));

// Output:
// microtask A
// microtask B
// timeout 0ms
// timeout inside microtask  ← added after microtask A, runs after existing macrotasks? No — it joins queue
// timeout 100ms



// 4g. Why UI doesn't freeze — the event loop keeps the UI responsive
// In a browser, this would FREEZE the page:
// while(true) {}   ← never yields to event loop → UI dies

// But this does NOT freeze the page:
let counter4g = 0;
const id4g = setInterval(() => {
  counter4g++;
   console.log("4g. tick", counter4g); // keep commented to avoid spam
  if (counter4g >= 5) clearInterval(id4g);
}, 50);


// 4g. Why UI doesn't freeze — the event loop keeps the UI responsive
// In a browser, this would FREEZE the page:
// while(true) {}   ← never yields to event loop → UI dies

// But this does NOT freeze the page:
let counter4g = 0;
const id4g = setInterval(() => {
  counter4g++;
  // console.log("4g. tick", counter4g); // keep commented to avoid spam
  if (counter4g >= 5) clearInterval(id4g);
}, 50);
// setInterval yields to the event loop between each tick — UI stays responsive

// 4h. Microtask flooding — can starve macrotasks (use with care!)
// If a microtask keeps scheduling more microtasks, macrotasks NEVER run.

let microtaskCount = 0;
function floodMicrotasks() {
  if (microtaskCount < 5) {
    microtaskCount++;
    console.log("4h. microtask flood #" + microtaskCount);
    queueMicrotask(floodMicrotasks); // keeps adding to microtask queue
  }
}
queueMicrotask(floodMicrotasks);
setTimeout(() => console.log("4h. macrotask runs AFTER all microtasks drain"), 0);


// 4i. Real-world: async/await and the event loop
async function eventLoopDemo() {
  console.log("4i. [1] async function start — synchronous");
  await Promise.resolve(); // yields — rest goes into microtask queue
  console.log("4i. [3] after first await — microtask");
  await Promise.resolve();
  console.log("4i. [4] after second await — microtask");
}

eventLoopDemo();
console.log("4i. [2] after calling async fn — still synchronous");
// Output: [1] → [2] → [3] → [4]


// 4j. Summary: execution order
console.log("\n4j. === EXECUTION ORDER SUMMARY ===");
console.log("4j. 1. Synchronous code (call stack)");
Promise.resolve().then(() => console.log("4j. 2. Microtasks (Promise.then, queueMicrotask, async/await)"));
setTimeout(() => console.log("4j. 3. Macrotasks (setTimeout, setInterval, I/O, UI events)"), 0);
