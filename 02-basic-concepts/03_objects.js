// ? objects
// * Two ways to create objects in JS
// * 1. Object constructor we'll learn later
// * 2. Object literal
const myNewSymbol1 = Symbol("optionKey1")
const userInformation = {
[myNewSymbol1] : "key1",
name : "Hamza-Shahzad",
"full name" : "Hamza-Shahzad-Yazdani",
age : 19,
class : "BS-IT",
university : "University of Sargodha",
email:"hamza.shahzad.8692@gmail.com",
phone: "0300-0000000",
hobbies : ["coding", "reading", "playing", "eating"],
[Symbol("optionKey2")] : "key2", // ^ we can't access this property with dot notation or bracket notation

}
// console.log(userInformation.name) // ^ first way to access object properties
// console.log(userInformation["name"]) // ^ second way to access object properties 
// * There are some senarios where we can't access object properties with first way so we use second way to access object properties
// console.log(userInformation.full name) // ^ it won't work
// console.log(userInformation["full name"])

// * There are two ways to update object properties
// userInformation.name = "haris Shahzad" // ^ first way to update object properties
// userInformation["name"] = "Hamza Shahzad" // ^ second way to update object properties
// console.log(userInformation.name)

// * we're going to create symbol and assign it to object properties
const myNewSymbol3 = Symbol("optionKey3")
userInformation[myNewSymbol3] = "key3"
// userInformation[Symbol("exitkey")] = "key1"
console.log(userInformation)
// console.log(userInformation[myNewSymbol1]) // ^ we can access this property with bracket notation
// console.log(userInformation[myNewSymbol3]) // ^ we can access this property with bracket notation
// console.log(userInformation.optionKey1) // ^ we can't access this property with bracket notation
// console.log(userInformation[Symbol("optionKey1")]) // ^ we can't access this property with bracket notation
// console.log(userInformation.myNewSymbol1)// ^ it won't work 

// * freeze object
Object.freeze(userInformation) // ^ it will freeze object and we can't update object properties
userInformation.name = "haris Shahzad"
console.log(userInformation)

