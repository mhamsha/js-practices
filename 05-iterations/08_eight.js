// * reduce in JavaScript

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrTotal = arr.reduce(function (accumulator, item) {
//   return accumulator+item;
// },0);
// console.log(arrTotal);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrTotal = arr.reduce((accumulator, item)=> {
//   return accumulator+item;
// },0);
// console.log(arrTotal);
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrTotal = arr.reduce((accumulator, item)=> accumulator+item ,0);
// console.log(arrTotal);

const shoppingCart = [
  {
    course: "js",
    prize: 1000,
  },
  {
    course: "py",
    prize: 2000,
  },
  {
    course: "ai",
    prize: 3000,
  },
  {
    course: "dataScience",
    prize: 4000,
  },
  {
    course: "ml",
    prize: 5000,
  },
];

const totalPrize = shoppingCart.reduce((acc, item) => acc + item.prize, 0);
console.log(totalPrize);
    