// class user {
//     constructor(name, email, password) {
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }
//     login() {
//         console.log(`${this.name} has logged in`);
//     }
//     logout() {
//         console.log(`${this.name} has logged out`);
//     }
//     changeUserName(){
//         return `${this.name} is changed to ${this.name.toUpperCase()}`;
//     }
// }
// const hamza = new user("hamza", "hello@gamil.com", "123456");
// console.log(hamza.changeUserName())
// hamza.login()
// hamza.logout()
// console.log(hamza);
// * Behind The Scene of Class

// function user(name, email, password) {
//   this.name = name;
//   this.email = email;
//   this.password = password;
// }
// user.prototype.login = function () {
//   console.log(`${this.name} has logged in`);
// };
// user.prototype.logout = function () {
//   console.log(`${this.name} has logged out`);
// };
// user.prototype.changeUserName = function () {
//   return `${this.name} is changed to ${this.name.toUpperCase()}`;
// };  
// const hamza = new user("hamza", "hello@gmail.com", "123456");
// console.log(hamza.changeUserName());
// hamza.login();
// hamza.logout();
// console.log(hamza);















