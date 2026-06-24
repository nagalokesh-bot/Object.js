// let student ={
//     name:"lokesh",
//     age:22,
//     city:"Hyd"
// }
// let name="Aliya";
// console.log(name);
// console.log(student.name);
// console.log(student,"student before changing the edit");
// console.log(student.age);
// console.log(student.city);
// console.log(student['age']);
// student.age=21;
// console.log(student.age);
// student.email="nagalokesh@paithacs.com";
// console.log(student.email);
// console.log(student,"student after changing the  edit");
// delete student.email;
// console.log(student);
// let user = {
//   name: "Ramakrishna",
//   sayHello: function () {
//     console.log("Hello " + this.name);
//   },
// };
// user.sayHello();

// let user2={
//     name:"aliya",
//     sayhello:function(){
//         console.log("hello " + this.name);
//     }
//     };user2.sayhello();

// let person ={ name:"Hari"};
// admin=person;
// admin.name="anitha";
// console.log(person.name)
// let keys = Object.keys(student);
// let values = Object.values(student);
// let entries = Object.entries(student);
// console.log(keys)
// console.log(values)
// console.log(entries)

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
// console.log(man);
// console.log(man.address.city);
// console.log(man.address.pincode);
// // optional chaining
// console.log(man?.phone);

// looping through objects

for (let key in man){
    console.log(key,man[key])
}
