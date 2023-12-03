// * For Loop in JavaScript
// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }
// for (let i = 1; i <= 10; i++) {
//   console.log("\nTable of: " + i + "\n");
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + " x " + j + " = " + j * i );
//   }
// }
// const myArray = [12,12,1,2,1,2,12,12,12,12,12,321,32]
// for (let h = 1; h < myArray.length; h++) {
//     const element = myArray[h];
//     console.log(element)
// }

// for (let i = 0; i < 11; i++) {
//   if (i == 5) {
//     console.log("5 Deducted.");
//     break;
//   }
//   console.log(i);
// }
for (let i = 0; i < 11; i++) {
  if (i == 5) {
    console.log("5 Deducted.");
    continue;
  }
  console.log(i);
}
