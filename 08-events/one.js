// false is for propagation which is event bubbling like from inner to outer and event capturing is vice versa example is below
// document.getElementById('three').onclick = ()=>{
//     alert('hello')
//     // This is good but not give us a number of feature like propagation than addEventListner
// }
// * MOUSE EVENTS
// document.getElementById('four').addEventListener('click',  (e)=>{
//     alert("Bumble BEE")
//     console.log(e)
// },false)

// document.getElementById('four').addEventListener('contextmenu',  (e)=>{
//     alert("Bumble BEE")
// right clicked

// },false)

// document.getElementById('four').addEventListener('dblclick',  (e)=>{
//     alert("Bumble BEE")
// // double clicked
// },false)

// document.getElementById('four').addEventListener('mouseenter',  (e)=>{
//     alert("Bumble BEE")
// // mouse enter into an element
// },false)

// document.getElementById('four').addEventListener('mouseleave',  (e)=>{
//     alert("Bumble BEE")
// // mouse leaves from an element
// },false)

// document.getElementById('four').addEventListener('mousedown',  (e)=>{
//     // alert("Bumble BEE")
//     console.log(e);
//     // console.log(e.toElement.baseURI)
//     // if (e.altKey == false) {
//     //     alert('hello brother')
//     // }
//     // console.log(e.toElement.localName)
//     // console.log(e.currentTarget)
//     // console.log(e.srcElement)
//     // console.log(e.clientX)
//     // console.log(e.clientY)

// // any mouse button
// },false)

// Time stamp

// document.getElementById('google').addEventListener('click',  (e)=>{
//     e.preventDefault()
//     console.log(e.timeStamp)
//     // timestamp tells us the the time in ms from when when the document loaded to click the button.
// },false)

// document.getElementById('google').addEventListener('click',  (e)=>{
//     e.preventDefault()
//     console.log(e.defaultPrevented)
// },false)

// document.body.addEventListener('keydown', (e)=>{
//     if (e.altKey == false) {
//         alert('hello brother')
//     }
// })
// const input = document.querySelector('input').addEventListener('keydown', (e)=>{

//     if (e.altKey == true) {
//         alert('you got hacked by alt key')
//     }else if(e.ctrlKey == true){
//         alert('you got hacked by ctrl key')

//     }else {
//         alert('you got hacked by shift key')
//     }
// })

// const ul = document.querySelector('ul')
//    const input =  document.createElement('input')
//         input.setAttribute('type',  'text')
//         // console.log(input)
//         ul.appendChild(input)

// ul.addEventListener('click',(e)=>{
//     console.log("click inside the ul")
// })
// document.getElementById('one').addEventListener('click',(e)=>{
//     console.log("click inside the one")
// })
// default is false means event bubbling
//     document.getElementById('one').addEventListener('click',(e)=>{
//         console.log("click inside the one")
// }, false)
//     ul.addEventListener('click',(e)=>{
//         console.log("click inside the ul")
//     },true)
// means if parent says it true its true and if it false it false


// * little Activity 

const ul = document.querySelector('ul')
ul.addEventListener('click', (e)=>{
    // console.log(e.target.parentNode.)
    e.preventDefault()
    if (e.target.tagName=== "IMG") {
        console.log(e.target.tagName)
        console.log(e.target.id)
        let  removeIT = e.target.parentNode
        removeIT.parentNode.removeChild(removeIT)
    }
    console.log(e.target.tagName)
    //  e.target.parentNode.remove()
}, false)