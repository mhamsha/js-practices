// * we basically consume promises but not learn making pormises like
// * fetch("https://something.con").then().catch().finally()
// & I'm going to learn how to make promises
// ^ Promise ONE
// const promiseOne = new Promise(function (resolve,reject) {
//     // & do any async task
//     // & DB calls, cryptography, network
//     setTimeout(() => {
//         console.log('Async task is completed');
//         // * we've to connect resolve to then function by shown below
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log('promised consumed');
// })

// ^ promise two the short hand of promise one
// const promiseTwo = new Promise(function (resolve,reject) {
//     setTimeout(() => {
//         console.log('Async task 2 is completed');
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log('promised consumed 2');
// })
// ^ promise three give value to resolve and take value from resolve method

// const promiseThree = new Promise((resol, reject) => {
//   setTimeout(() => {
//       let user = {
//           userName: "hamzaSHahzad",
//           userEmail: 'xxxxxx@gmail.com',
//           userPhone : "00000000000",

//       }
//       let userNum =["user1","user2","user3","user4","user5"]
//       resol(userNum)
//       resol(user)
//       // ~ come first get first rules apply in resolve methods in js don't forget yo
//   }, 1000);
// //   setTimeout(() => {
// //     resolve({
// //       userName: "hamza",
// //       email: "chai@gmail.com",
// //     });
// //   }, 1000);
// // }).then((user) => {
// //   console.log(user);
// //   console.log(user.userName);
// //   console.log(user.email);
// // });
// }).then((user)=>{
//     console.log(user)
//     // console.log(user.userName)
//     // console.log(user)
// })

// ^ Promise fourth how to use reject method,finally keyword,then chaining
// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({userName:"hamza-Shahzad",userId:"123456"})
//         } else {
//             reject('ERROR: Something Went Wrong........')
//         }
//     }, 1000);
// }).then((msg)=>{
//     // console.log(msg)
//     // console.log(msg.userName)
//     // console.log(msg.userId)
//     return msg //^ when I return some value from .then we need anothere .then to catch it.
// }).then((secondMsg)=>{
//     // console.log(secondMsg.userId)
//     // console.log(secondMsg.userName)
//     return secondMsg // ^ This one also
// }).then((third)=>{
//     console.log(third)
//     // console.log(third.userName)
//     // console.log(third.userId) // ^ and so on and forth
// })
// .catch((msg)=>{
//     console.log(msg)

// }).finally(()=>{
//     console.log("The promise is either resolved or rejected!")
// })

// ^ promise five about async await syntax to handle response from promise
// const promiseFive = new Promise((res,rej)=>{
// let error = false;
//     if (error) {
//         rej("You got some Error My dear!")

//     } else {
//         res({userName:"JavaScript",userPassword:"hamza123"})

//     }
// })

// // async function consumePromised(){
// //     const response = await promiseFive
// //     console.log(response)
// // }
// // consumePromised()
// // ~ the syntax below I gracefully catch the error.
// async function consumePromised(){
//     try {
//         const response = await promiseFive
//         console.log(response)

//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromised()

// ^ This is real senario by async await function
// async function consumeFetchGetAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(response)
//         const data = await response.json()
//         console.log(data)

//     } catch (error) {
//         console.log("hello",error)
//     }
// }
// consumeFetchGetAllUsers()

// ^ handle response by .then .catch by the way chaining of then is called is thenable
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);
    return (data = response.json());
    // return data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
