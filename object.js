let student ={
    name:"lokesh",
    age:22,
    city:"Hyd"
}
let name="Aliya";
console.log(name);
console.log(student.name);
console.log(student,"student before changing the edit");
console.log(student.age);
console.log(student.city);
console.log(student['age']);
student.age=21;
console.log(student.age);
student.email="nagalokesh@paithacs.com";
console.log(student.email);
console.log(student,"student after changing the  edit");
delete student.email;
console.log(student);
let user = {
  name: "Ramakrishna",
  sayHello: function () {
    console.log("Hello " + this.name);
  },
};
user.sayHello();

let user2={
    name:"aliya",
    sayhello:function(){
        console.log("hello " + this.name);
    }
    };user2.sayhello();

let person ={ name:"Hari"};
admin=person;
admin.name="anitha";
console.log(person.name)
let keys = Object.keys(student);
let values = Object.values(student);
let entries = Object.entries(student);
console.log(keys)
console.log(values)
console.log(entries)

let man = {
  name: "lokesh",
  age: 21,
  phone: 7989728514,
  height: 170,
  city: "guntur",
  pincode: 123456,
  country: "India",
  address: {
    city: "Hyd",
    pincode: 123456,
    country: "India",
  },
};
console.log(man);
console.log(man.address.city);
console.log(man.address.pincode);
// optional chaining
console.log(man?.phone);

looping through objects

for (let key in man){
    console.log(key,man[key])
}


// tasks
//1) Create a student object with nested address
let student={
  name:"Hari",
  age:20,
  address:{
    city:"guntur",
    pincode:522233
    phone no:7989728514
  };
};
console.log(student);

// 2) safely access misisng property using ?.

let student1={
  name:"sai",
  age:20,
  address:{
    city:"guntur",
    pincode:522233,
    phoneNo:7989728514,
  },
};
delete student1.address.phoneNo
console.log(student.address?.phoneNo)
console.log(student);


// 3. Looop through object and print all keys & values

let student2={
  name:"kiran",
  age:24,
  address:{
    city:"guntur",
    pincode:522233,
    phoneNo:9381948620,
  },
};
for(let key in student2){
    console.log('{',key,':',student2[key],'}')
}

//4. Copy an object and change a property , also add a new property

let user={
    name:"krishna",
    age:80,

};
let person=user;
console.log(person)
person.age=68;
person.city="edlapadu";
console.log(person)


//  // 6)Create an object named as compnay with nested departments with name descripiton and id of each department
//     Loop and print the details
//     use Optional Chaining in at least one place

const company={
    name:"Paithacs Software Solution",
    departments:{
        frontend:{
            id:"pai014emp",
            name:"frontend department",
            description:"this team develops the frontend part",
        },
        backend:{
            id:"pai018",
            name:"backend department",
            description:"this team develops the backend part",
        },
        hr:{
            id: "HR-103",
      name: "Human Resources",
      description: "Manages recruitment, employee relations, and payroll."
        },
        
    },
};
for (let key in company){
    console.log(key,company[key]);
};
console.log(company.departments.frontend?.salary)


7. Create an object book with title, author, rating
   Update the rating of the book
   Add a function describe() that needs to log the "Book by an author named as [author name]"

const book = {
  title: "Ramyana",
  author: "valmiki",
  rating: 4.5,
  describe:"",
};
book.rating = 5;
book.describe=`Book by an author named as [${book.author}]`;
console.log(book);

// 8. Create a object fro a movie, a product, for a user profile

const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  genres: ["Sci-Fi", "Action"]
};

function Product(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
}
const product = new Product("Wireless Mouse", 29.99, "Electronics");

class UserProfile {
  constructor(username, email, isAdmin) {
    this.username = username;
    this.email = email;
  }
}
const userProfile = new UserProfile("dev_dan", "dan@example.com", false);
console.log(movie)
console.log(product)
console.log(userProfile)


let a=5;
let b=a;
b=20;
console.log(a)
console.log(b)
    
let user1={
    name:"lokesh"
}
console.log(user1.name)
let user2=user1;
user2.name="Hari"
console.log(user1.name)
console.log(user2.name)

// Numbers are copied

// objects are shared
// objects variables doesn't store the object itself
// They store the address of the objects

// HOuse = objects
// address = Reference


let user1 = {
  name:"Murari"
}

let user2 = Object.assign({}, user1)
user2.name= "Mahesh"
console.log(user1.name)
console.log(user2.name)


// spread operator (...)

let user1 = {
  name:"Murari"
}

let user2 = {...user1}
user2.name= "Mahesh"

console.log(user1.name)
console.log(user2.name)




let arr1 = [1,2,3]
let arr2 = [...arr1]
arr2.push(2)
arr2.pop(2)
console.log(arr1)
console.log(arr2)

// 1. Create an object and copy it using spread
// 2. Modify copied object and verify original doesn't change
// 3.Create an array and copy it using spread

let person1={
    name:"lokesh"
}
let person2={...person1}
console.log(person1)
console.log(person2)

let a=[1,2,3,4]
let b=[...a]
b.push(5)
console.log(a)
console.log(b)

// 4. Create a nested object and observe copy behaviour

let person1={
    name:"lokesh",
    age:22,
    address:{
        city:"edlapadu",
        state:"AP",
    }
}
let person2={...person1.address}
console.log(person1)
console.log(person2)


