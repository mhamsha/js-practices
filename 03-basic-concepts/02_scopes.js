// * Scopes in JS
var c = 400;
let b = 300;

if (true) {
  const a = 100;
  let b = 200;
  var c = 300;
  // console.log(b);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const userName = "hamzaShahzad";
  function two() {
    const website = "youtube";
    console.log(userName);
  }
  two()
//   console.log(website);
}

one();

// & --------------------------------- INTERESTING ------------------------------

// console.log(addOne(12));
// function addOne(num) {
//     return num + 1;
// }'

// console.log(addTwo(123));
// const addTwo = function (num) {
//   return num + 2;
// };
