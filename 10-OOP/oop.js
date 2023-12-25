// * Object
// ^ Collection of properties and methods
// * Parts of OOP
// ^ object literals
// ^ constructor function
// ^ Classes
// ^ instances(new,this keyword)
// * 4 Pillars
// ^ 1. Encapsulation
// ^ 2. Abstraction
// ^ 3. Inheritance
// ^ 4. Polymorphism

// & objec Literal
// const userOne = {
// name: "haris",
// count: 10,
// isLoggesIn: true,
// getUserDetails: function () {
//     // console.log("Got user details from db and show it to user");
//     console.log(`Got user details from db and show it to user ${this.name}`);
//   },
// };
// const userTwo = {
// name: "hamza",
// count: 10,
// isLoggesIn: true,
// getUserDetails: function () {
//     // console.log("Got user details from db and show it to user");
//     // console.log(`Got user details from db and show it to user ${userOne.name}`);
//     console.log(this);
//   },
// };
// // console.log(user.name);
// // console.log(user["name"]);
// console.log(userOne.getUserDetails());
// console.log(userTwo.getUserDetails());
// console.log(this)

// & Constructor Function
// // const promiseOne = new Promise();
// // const date = new Date();

// function user(name, count, isLoggesIn) {
//   // myname = name;
//   // mycount = count;
//   // myisLoggesIn = isLoggesIn; // ^ this is not a good practice and we cannot use new keyword with it but with this keyword we can use new keyword
//   this.name = name;
//   this.count = count;
//   this.isLoggesIn = isLoggesIn;
//   this.greetings = function () {
//     console.log(`Hello ${this.name}`);
//   };

//   return this; // ^ this is returned by default we don't need to write it and if we use first methods we have to explicitly return this otherwise it will return undefined
// }

// const userOne = new user("haris", 10, true); // ^ that's why we use "new" constructor keyword
// const userTwo = new user("hamza", 11, false);
// // console.log(userOne);
// // console.log(userTwo);
// console.log(userOne.constructor); // ^ it just a reference about our own constructor function
//! see about instanceOf keyword
// * Few line about new keyword
// ^ 1. It creates a new empty object and we called it instance or object
// ^ 2. constructor keyword called by new keyword and it packs the arguments and give it you
// ^ 3. arguments injected into this keyword
// ^ 4. now you have it in your function