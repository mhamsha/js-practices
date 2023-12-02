// * Immediately invoked(execute,run,launch) Functions Expressions

// (function chai() {
//     // ^ This is named IIFE
//     console.log(`DB Connected`);
// })(); // ^ put semicolon is very important if you wanna use to IIFE 

((name)=>{
    // ^ This is unnamed IIFE
    console.log(`DB Connected ${name}`);
})("hamza"); 