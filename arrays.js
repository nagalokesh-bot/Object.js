let m1=90;
let m2=80;
console.log(m2);
console.log(m1);


let marks=[40,60,30,80,20];
console.log(marks)
console.log(marks[4])


let students = ["lokesh","hari","sai","gopi krishna","suresh","akhila","manasa","harsha","muzeef","manasa"];

for (let i = 0; i < students.length; i++) {
  console.log("Hello "+students[i]);
}

let fruits = ["dragon", "Mango"];
console.log(fruits);

// push() adds an element at the end of the array
fruits.push("watermellon");
console.log(fruits);
// pop() removes an element at the end of the array

fruits.pop();
console.log(fruits);

// unshift() adds an element to start of the array

fruits.unshift("banana");
console.log(fruits);

// shift() remvoes an element to start of the array

fruits.shift();
console.log(fruits);


// splice() - addEventListener, remove , replace

// array.splice(start, deleteCount, item1, item2)

