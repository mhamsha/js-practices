// * Filter Method in JavaScript
// const arr = [1,1,1,3,2,3,2,345]
// const newArr = arr.filter(item=>{return item>1})
// console.log(newArr)
// let myNewArr =[]
// const newArr = arr.forEach(item => {
//     if (item>1) {
//         return myNewArr.push(item)
//     }

// })
// console.log(myNewArr);

const books = [
  {
    title: "Book one",
    genre: "fiction",
    publish: "1981",
    edition: "2004",
  },
  {
    title: "Book two",
    genre: "fiction",
    publish: "1971",
    edition: "2011",
  },
  {
    title: "Book three",
    genre: "horror",
    publish: "1981",
    edition: "2004",
  },
  {
    title: "Book four",
    genre: "history",
    publish: "2020",
    edition: "2023",
  },
  {
    title: "Book five",
    genre: "non-fiction",
    publish: "2001",
    edition: "2004",
  },
  {
    title: "Book six",
    genre: "mystry",
    publish: "1950",
    edition: "2021",
  },
  {
    title: "Book seventh",
    genre: "history",
    publish: "1991",
    edition: "2007",
  },
  {
    title: "Book eight",
    genre: "horror",
    publish: "1951",
    edition: "2014",
  },
];

// const userBooks = books.filter(book=> book.genre === "history")
// const userBooks = books.filter(book=> book.genre === "history" && book.publish >2000)
const userBooks = books.filter(book=> book.genre === "history" && book.publish >2000)
console.log(userBooks);
