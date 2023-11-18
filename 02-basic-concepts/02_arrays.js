// ? Array part- 2

const marvelHeroes = ["ironMan", "captainAmerica", "Thor", "SpiderMan"];
const dcHeroes = ["Batman", "Superman", "WonderWoman", "Flash"];

// ? push() method not good practice when to join two arrays 
// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);

// ? concat() method is good practice when to join two arrays
// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

// ? spread operator is also good and more preferible practice when to join two arrays because we can join two to many arrays with spread operator
// const allnewHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allnewHeroes);  

// ? flat() method is used to flat the nested array and flat means to convert the nested array into single array

const another_array = ["hello", "world",['hell'] ,["I", "am", "ironMan", ["I", "am", "Batman"]]];
// console.log(another_array);
const flat_array = another_array.flat(Infinity);
// console.log(flat_array);

// ? isArray() method is used to check the array is array or not

 console.log(Array.isArray("hamzashahzhad"));

// ? Array.from() method is used to convert the any data type  into array
// console.log(Array.from("hamzashahzad"));
// console.log(Array.from({name: "hamza"})); // ^ it gives empty array because it does not understand whether it make array of key or value so we have to pass second argument in Array.from() method

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

// ? Array.of() method is used to convert the any data type  into array
const scores = Array.of(score1, score2, score3, score4);
console.log(scores);

console.log(Array.of("hamzashahzad"));
const new_adventure = Array.of({name: "hamza", age: 20},{name: "shahzad", age: 20})
console.log(new_adventure[1]);