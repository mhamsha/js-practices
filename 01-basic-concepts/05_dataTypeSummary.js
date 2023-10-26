/*Basically there are two types of dataTypes in JS on the basis of memory allocation and how to access like in c++ call by value and call by reference , first one is primitive and second one is non primitive. */
/*Primitives are stored directly in the memory location while non-primitives are stored indirectly by referencing a memory location*/
/*JS is Dynamically types , In dynamically typed languages all type checks are performed in a runtime, only when your program is executing. So this means you can just assign anything you want to the variable and it will work */
// Primitive DataTypes
// 7:String,Numbers,boolean,null,undefined,symbol,bigInt
const myName ="hamza shahzad"
const myAge = 18;
const married = false
const child = null
const wife = undefined //or : let wife;
const infinity = 1n
const id = Symbol('hamza')// they are not same
const anotherId = Symbol('hamza') // they means you (id) and me(anotherID)
console.log(typeof myName,typeof(myAge),typeof(married),typeof(child),typeof(wife),typeof(infinity));
// Non-Primitive DataTypes / Reference DataTypes
// 3:Array,object,function
const list = ['hamza', 'shahzad']
const objext = {
    name: 'hamza',
    age: 18
}

const func1 = function add(){
    console.log('hello world')
 }
func1()
console.log(typeof func1, typeof(objext), typeof(list)) 

// ________________________Stack OR Heap memory____________________________

// stack(Primittive) heap(Reference/non-primitive)

let yourName = 'hamza'
let hisName = yourName
hisName = 'haris'

console.log(yourName);
console.log(hisName);
// so in this primitive data type we get copy of the Copy of that thing not reference

let userOne = {
    name: 'hamza',
    age: 18
}
let userTwo = userOne

userTwo.name= 'shahzad'
console.log(userOne.name);
console.log(userTwo.name);
// so in this non- primitive data type we get reference of orignal memory not  the Copy of that memory means if we change the copy means the other we change the orignal memory not his copy like in primitive data types memory stack