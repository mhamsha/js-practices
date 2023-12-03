// * "for in " loop in JS

const myObj = new Object();
myObj.game1 = "Clash OF Clans";
myObj.game2 = "8 ball pool";
myObj.game3 = "Shadow Fight Arena";
// console.log(myObj);

for (const key in myObj) {
  //   console.log(`${key} ${myObj[key]}`);
}
// * in map Data type
const myMap = new Map();
myMap.set("game1", "asphalt 1");
myMap.set("game2", "spiderMan");
myMap.set("game3", "naruto");
myMap.set("game4", "GTA 6");

for (const key in myMap) {
  // console.log(key) // ! map is not iterable
}
// * in array
const arr = [2341, 234234, 323423, 43242, 324235, 2346, 2347, 2348];

for (const key in arr) {
  // console.log(`${key} ${arr[key]}`);
//   console.log(arr[key])
}
// *in string
const str = "hello world again";
for (const key in str) {
//   console.log(`${key} ${str[key``]}`);
}
