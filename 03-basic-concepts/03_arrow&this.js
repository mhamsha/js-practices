// * Arrow Function and This keyword

const user = {
  userName: "HamzaShahzad",
  prize: "99$",
  welcomeMessage: function () {
    //   welcomeMessage: function (userName) {
    // console.log(`${user.userName}, welcome to website.`);
    // console.log(`${this.userName}, welcome to website.`);
    // console.log(`${userName}, welcome to website.`);
    // console.log(this);
    // console.log(user);
  },
};
// user.welcomeMessage(user.userName = "hannan");
user.userName = "Haris";
// user.welcomeMessage();
user.userName = "Hannan";
// user.welcomeMessage();
// console.log(this);
// console.log(user);

function chai() {
  let userName1 = "shahzad";
  // console.log(this.userName1); // ^ I know we cannot access the context by using this keyword in function
  userName = "hamza";
  //   console.log(this.userName); // ? but how could this be done
}
// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2 + " hello this is hamza");

const addTwo = (num1, num2) => ({userName : 'hamzaShahzad'});
console.log(addTwo(12, 272));
