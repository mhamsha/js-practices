// function multiplyBy3(input) {
//   return input * 3;
// }

// console.log(multiplyBy3(6));
// multiplyBy3.power= 12;
// console.log(multiplyBy3.power);
// console.log(multiplyBy3.prototype);
// // ^ as we see we can use func6tion as an object and add properties to it and it will not affect the function

function createUser(name, score) {
  this.name = name;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.login = function () {
  console.log("Yes you are logges in my brother ");
};
const chai = new createUser("chai", 100);
const tea = new createUser("tea", 100);

chai.increment();
chai.login();
console.log(chai.score);

// ^ Here's what happens behind the scenes when the new keyword is used:

// ^ A new object is created: The new keyword initiates the creation of a new JavaScript object.

// ^ A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// ^ The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// ^ The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.