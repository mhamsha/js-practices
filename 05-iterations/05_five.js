// * for each loop in JS

const arr = ['hamza', "hannan", "haris", 'huzaifa', 'hanzla', 'hadi', 'huzaifa']
arr.forEach((element) => {
    console.log(element);
});

arr.forEach( function(item){
    // console.log(item);
} )

const item2 = (value,index,array)=>{console.log(value,index,array);} 
// arr.forEach(item2)
function item(element) {
    // console.log(element);
}

const coding = [
    {
        lang : "JS",
        dev : "hamza"
    },
    {
        lang : "PY",
        dev : "Haris"
    },
    {
        lang : "ruby",
        dev : "hannza"
    },
    {
        lang : "cpp",
        dev : "hamza"
    }
]
// * this is common practice we used in project 
coding.forEach(element => {
    // console.log(element.lang);
    // console.log(element.dev);
});



























