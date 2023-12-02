// * object constructor
const person = new Object(); // * It creates a singleton object
// console.log(person)

const person1 = {};
person1.name = "hamza";
person1.age = 18;
person1.class = "BS-IT";
person1.university = "University of XYZ";
person1.email = "some@gmail.com";
person1.phone = "0300-0000000";
// console.log(person1.age,person1.email)

const regularPerson = {
  name: {
    fullname: {
      firstName: "hamza",
      secondName: "shahzad",
    },
  },
  age: 18,
  class: "BS-CS",
  university: "University of XYZ",
};
// console.log(regularPerson.name.fullname.secondName)



const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const obj4 = {obj1,obj2} // ^ This is not in use and not good
// console.log(obj4)

// const obj4 = Object.assign({}, obj1,obj2,obj3) // ^ This is good but not latest
// console.log(obj4)
const obj4 = { ...obj1, ...obj2, ...obj3 }; // ^ This is good but  latest
// console.log(obj4)

const users = [
  { hamza: 23, 2: "b" },
  { abc: "a", 2: "b" },
  { abc: "a", 2: "b" },
  { abc: "a", 2: "b" },
];
// console.log(users[2].abc)

// console.log(Object.keys(users ));
// console.log(Object.values(users ));
// console.log(Object.entries(users));
// console.log(course.hasOwnProperty('category'));


const course = {
    name: "JavaScript",
    duration: 10,
    educator: "hamza",
    category: "programming",
    isFree: true,
    language: ["English", "Urdu"],
    price: 1000,
  };
  const { name: fullname, duration: dura, educator: edu } = course;
  console.log( fullname.indexOf('a'), dura,edu, course.isFree, course.language.length)
  console.log( dura)
  console.log( edu)
  
  // * Json format API
  // {
  //   "name" : "Hamza",
  //   "Course Name ": "JS in hindi",
  //   "instructor":"Hitesh Choudhary"
  // }

  // [
  //   {},
  //   {},
  //   {}
  // ]