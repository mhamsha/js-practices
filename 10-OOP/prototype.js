let myName = "hamza    ";
let myName2 = "haris    ";
// ^ In this section I create a method for string prototype and add the method to the string prototype a
String.prototype.trueLength = function () {
//   console.log(this);
//   console.log(`The True length is ${this.trim().length}`);
console.log("i am here in string prototype")
};

// myName.trueLength();
// myName2.trueLength()
//^  we can use this method anywhere in string data type but not in object or any other data type
let myArray = [1, 2, 3, 4, 5];
// myArray.trueLength();
// ^ this will give us an error because we can't use this method in array data type

// * In this section I create a method for object  prototype and we can use these method any other data type like string, array, object etc because object is a parent of all data types and the parent of object is null

Object.prototype.helloBrother = function () {
  console.log("Hello Brother, How are you?");
};
// myName.helloBrother(); //^ this will work because string is a child of object
// myArray.helloBrother();//^ this will work because array is a child of object

let myObject = {
  name: "hamza",
  age: 20,
  class: "BSCS",
};
// myObject.helloBrother(); //^ this will work because object is a child of object
// myObject.trueLength(); //^ this will not  work because object is a child of object
// & The reason why all this happening is JS is protoype based language and all the data types are child of object and object is a child of null and JS tries to find some method in string if there is no such method in string then it will go to object and find the method and if there is no such method in object then it will go to null and find the method and if there is no such method in null then it will give us an error and if we want to find some method in object then it will not go to downside in string or other data types just gives us null.
// * Inheritence in JS

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //^ this is the way to inheritence in JS in which I'm saying that add all the properties of TeachingSupport in TASupport and if there is any property in TeachingSupport which is already in TASupport then don't add that property in TASupport and if there is any property in TeachingSupport which is not in TASupport then add that property in TASupport and TASupport properties are not available in TeachingSupport
}
// console.log(TASupport.isAvailable)
// console.log(TASupport.makeAssignment)
// console.log(TASupport.fullTime)
// console.log(TeachingSupport.isAvailable)
// console.log(TeachingSupport.fullTime) //^ like this
Teacher.__proto__ = User //^ this is the way to inheritence in JS in which I'm saying that add all the properties of User add in Teacher and if there is any property in User which is already in Teacher then don't add that property in Teacher and if there is any property in User which is not in Teacher then add that property in Teacher and Teacher properties are not available in User
// console.log(Teacher.name)
// console.log(Teacher.email)
// console.log(User.makeVideo); //^ like this

// * modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
// console.log(TeachingSupport.makeVideo)
// console.log(Teacher.isAvailable) //^ like this