// ? Date and time In JS
const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);
const myNewDate = myDate.toJSON()
// console.log(typeof myNewDate);

// const myCreatedDate = new Date(2023, 9, 26 )
// const myCreatedDate = new Date(2023, 9, 26, 20, 24)
// const myCreatedDate = new Date("2023-1-30")
const myCreatedDate = new Date("01,13,2023")
// console.log(myCreatedDate.toLocaleString());

const timeStamp = Date.now()
// console.log(timeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // to convert ms to sec

let newDateTwo = new Date()
console.log(newDateTwo.getMonth() + 1);

newDateTwo.toLocaleString('default', {
    weekday:"long"
})

