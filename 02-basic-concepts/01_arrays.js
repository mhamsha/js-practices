// ? Arrays
// * Arrays are a way to store multiple values in a single variable and it makes shallow copies not deep copies and shollow means share the same references and deep means do not share the same references.
const arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr)
// console.log(arr[5])
// console.log(arr.length)
// * Another way to create a Array
const arr2= new Array("a","b","c","d","e","f","g","h","i","j")
// console.log(arr2)
// ? Array Methods
// arr.push(11) // ^ Add a new element to the end of the array
// arr.push(12) 
// arr.pop() // ^ Remove the last element of the array
// arr.shift() // ^ Remove the first element of the array
// arr.unshift("hamza") // ^ Add a new element to the start of the array
// console.log(arr.includes(10)) // ^ Check if the array includes the element


// console.log(arr.indexOf(10)) // ^ Check if the array includes the element and return the index of the element

// const newArr = arr.join("") // ^ Convert the array to a string and you can specify the separator
// console.log(arr)
// console.log(newArr)

const myNewArray = [0,1,2,3,4,5,6,7,8,9,10,"khan","hamza","haris","ali"]
console.log(myNewArray.slice(0,5)) // ^ Slice the array from the start index to the end index and not last range included and its does not change the orignal array
console.log("A",myNewArray)

const myNewArray1 = [0,1,2,3,4,5,6,7,8,9,10,"khan","hamza","haris","ali"]
console.log(myNewArray1.splice(0,5)) // ^ Splice the array from the start index to the end index and last range included and its change the orignal array
console.log("B",myNewArray1)