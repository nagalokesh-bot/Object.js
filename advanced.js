

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
