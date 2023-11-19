// * String and its Methods in JS
// * This is first way to declare a string:
const myName = "Hamza-Shahzad"
console.log(myName)
// * This is second way to declare a string using 'javaScript Object' and using keyword 'new' and in this methods we are also explicitely defined this is string not any other data type and we get string as an object not an array:
const gameName =new String("Call-of-Duty")
// console.log(gameName) 
// * Concatinating means joining the string  
// * 1-Best method 
// console.log(`Hello, my name is ${myName} and my game is ${gameName}`)
// ! 2-Old and deprecated method
// console.log('Hello, my name is ' + myName + ' and game name is ' + gameName)
// * Slicing,Indexing and methods in JS:
// console.log(myName[1]); // indexing
// console.log(myName.__proto__) //^ to see the protypes of object we can see empty set here in node but we can see fucntion in browser console and we don't need to use  fuction like __proto__.function but instead just write function name and proto its just a syntax.
// console.log(myName.length); // ^return length of the string
// console.log(myName.toLowerCase());  // ^ return a copy of string to lowerCase
// console.log(myName.toUpperCase()); // ^return a copy of string to UpperCase
// console.log(myName.charAt(2434)); // ^ return the character at postition x like i think act like indexing but who knows otherwise give just white space
// console.log(myName.indexOf('S'));// ^return the index of given character x otherwise return false -1 its case-sensitive like small s != S
// console.log(myName.substring(1, 5)); // ^for slicing in positive if use negative convert to 0
// console.log(myName.slice(-8,-3)); // ^also for slicing in both .
const myGmail =  '    \nXXXXXXXX@gmail.com     '
// console.log(myGmail.trim()); //^Erase white spacing at start and at end but not in between two char
// console.log(myGmail.trimStart()); //^also erase but at the start 
// console.log(myGmail.trimEnd()); //^alst erese but at the end
// console.log(myGmail.replace('gmail','outlook'));// ^replace char or word
// console.log(myGmail.includes('gmail'));// ^check present or not 
// console.log(myGmail.split('@')); split into array by char or white space you have given to this func.
// ** This is a Function To capitalize the first character of every word in a string like in python method capitalize.
// function capitalize(string) {
//     let words = string.split(" ");
//     for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
//         }
//     console.log(words.join(' '));    
//     }
// capitalize('hamza-shahzad kia hal chal han tumhara ')
const mood = 'wooha! '
console.log(`Hello, I'm very ${mood.repeat(10)}`) // ^to repeat a string as much as needed




