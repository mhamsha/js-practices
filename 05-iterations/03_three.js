// * "forof" loop is best to iterate array but you can use anything you want don't bother.
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (const item of arr) {
  //   console.log(item);
}
// * "forof" loop is also used for string
const str = "M.Hamza Shahzad";
for (const char of str) {
  if (char == " ") {
    continue;
  }
  // console.log(char);
}
// * Map is also a data type similar to object like key value pair but has a difference like "map"1- does not allow duplicate key values 2- we've to write stirng key in quotes 3- It is not iterable in "forin loop"
// * we can also use "forof" loop in Map Data type
const myMap = new Map();
myMap.set("game1", "asphalt 1");
myMap.set("game2", "spiderMan");
myMap.set("game3", "naruto");
myMap.set("game4", "GTA 6");

// console.log(myMap);
console.log(myMap.get('game4')
)
// * this is easy and good one to use
for (const [key,value] of myMap) {
    // console.log(key + " => "+ value);
}

// * I find this syntax just for fun and really getting me motivated
for (const [key] of myMap) {
    console.log(`${key}`+" "  +myMap.get(`${key}`))
      }

// * object is not iterable in "forof" loop
// const myObj= new Object();
// myObj.game1 = "Clash OF Clans" 
// myObj.game2 = "8 ball pool"
// myObj.game3 = "Shadow Fight Arena"
// // console.log(myObj);

// for (const [key, value] of myObj) {
//     // console.log(key, value);
// }

