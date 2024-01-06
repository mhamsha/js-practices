// const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descripter); 
// Math.PI = 3.15;
// console.log(Math.PI); // ^ you cannot change the value of PI becaue it is read-only and js developer made it that way for a reason that no one can change the value of PI

const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'hello#gmail.com',
}
console.log(Object.getOwnPropertyDescriptor(user, 'firstName')); // ^ this is how you get the property descriptor of an object
// * this is how you change the property descriptor of an object
Object.defineProperty(user, 'firstName', {
    enumerable: false,
    // configurable: false,
    // writable: false,
    
})
// * no one can change the property descriptor of an object
console.log(Object.getOwnPropertyDescriptor(user, 'firstName'));
        
for (const [key,value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}



