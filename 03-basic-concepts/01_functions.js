// * Functions in JS
// ^ "== " DO  a conversion of datatype if possible
// ^ "===" Do not do a conversion of datatype if posible or not
// function addTwoNumber(num1=0,num2=0) {
//     if (num1==num2) {

//         return num1+num2
//     }
// }
// console.log(addTwoNumber("12",12))
// function userLoggedIn(userName = "Unauthorized Person") {
//     // ^ using "!" means NOT operator which reverse the output means "If not equal to userName print this code."
//     if (!userName) {
//         return "PLease Enter Your Name!"
//     }
//     return `${userName} just logged in.`
// }
// console.log(userLoggedIn())

// * Rest operator "..." when we use in Function and spread operator when use in others place.

function pritnCartPrizes(...prizes) {
  return prizes;
}
// console.log(pritnCartPrizes(12, 12, 12, 12, 12));

function handleObj(anyObj) {
  return `The Name of Instructor is:  ${anyObj.instructor} and Prize of course is:  ${anyObj.prize} `;
}

// console.log(
//   handleObj({
//     instructor: "HITESH CHOUDHARY",
//     prize: "199$",
//   })
// );
// const courseDetails = {
//   instructor: "HITESH CHOUDHARY",
//   prize: "199$"
// };
// console.log(handleObj(courseDetails));

function handleArray(anyArray) {
    return anyArray[1]
}
// console.log(handleArray([12,12,12,3,12,54]))