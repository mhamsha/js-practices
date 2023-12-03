const intNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newIntNumbers = intNumber.map((value, index, array) => {
// console.log(index);
// console.log(array)
// value = value +10
//   console.log(value, index, array);
// returnValue = `${value+10}  ${index}  ${array}`
//   return value, index, array;
// return returnValue
// });
// console.log(newIntNumbers);
// * that's why I prefer filter instead of map for this kind of work
// const newIntNumbers = intNumber.map(value=>{
//     if (value>5) {
//         return value
//     }
// })
// console.log(intNumber.map(value=>(value>5)))
// consol0e.log(newIntNumbers);
// * This is called chaining in which we use two or more methods at the same time.
const newIntNumbers = intNumber
  .map((item) => item + 10)
  .map((item) => item - 10)
  .filter((item) => item > 5);
// console.log(newIntNumbers);
