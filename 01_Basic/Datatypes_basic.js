// we know the number and types of Data types but generally it is catagrosied into two types "Primitive" & "non Primitive" data typesdifference is jus like in C programming their ic call by value or call by address/refrence. But exactly difference is that how dat is store and how we access the data on this bases data type gets catagorised into two types

// Primitive data types adn these are call by value means we jus copy the value and process on it but not to get the address of value
// 1. string
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbole    //used to make value unique
// 7. BigInt

const value = 50     //both are Number data type
const value2 = 10.9

const result = false
const marks = null   //remember it doe not mean value is 0. value is nothing even not 0
let className;   //undefined

const id = Symbol('121')   //it makes unique value like id which is always unique and itz return type is also symbole
const idsec = Symbol('121')  //it looks it is same as previous but not that is the one of reason why we use symbole. even we provide same value but they are not same
// let us verfi is same or not

console.log(id === idsec); // it is false



// Non-Primitive / Refrence in this we call any value by its refrence / address means if we make some changes it gets changes automatacly on his refrence

// 1. Arrays
// 2. Objects
// 3. Functions
 
const marvels = ["Iroman, Captain, Thor, Natasha"];     //array data type


let myObj =     //here we creat object as varible by writing "let" keyword and myObj as var name other waise we can declair Object without creating varible
{
    name: "Tony_stark",    //in obj we write in key value pairs, 
    age: 35,                //Object is present in "{}" braceses and data type may 
}                           //And all data types can exist in Object means Number, Boolean, String, Function and even another object

//function declaration
//In JS function can b treated as varible like object by declairing varible with let keyword

const myFun = function()
{
    console.log("Hellow Jarvis")
}


console.log(typeof marvels)  //here if check the data type of "myObj" it shows "object" but if we check the datatype of myFun it shows function and we should know all "non primitive" data types are object datatype then why function shows function data type because it jus shows function actualy it is "Function Object"


// All Data type value and return

// Undefined =	"undefined"
// Null =	"object"
// Boolean =	"boolean"
// Number =	"number"
// String =	"string"
// Object (native and does not implement [[Call]])	= "object"
// Object (native or host and does implement [[Call]]) =	"function"
// Object (host and does not implement [[Call]]) =	Implementation-defined except may not be "undefined", "boolean", "number", or "string".


// Memories types and working of Memories
// Two types of memory 
// 1. Stack : use in Primitive data type. In this type it is actually call by value means if we make change of varible then actual value remains same because in this we got the copy of varible means duplicate so if we make changes the actual value remains same
let a = 4
let b=a
console.log(b)  //here b=4 because value of a goes into b
b=8             //Now we change value of b. Is value of "a" gets change or not because  "b=a"
console.log(b)  // Here b=8 because previous line of code
console.log(a)  // But here value of "a" remains same i.e 4 because of call by value 


// 2. Heap : use in Non-Primitive data type

let usr1 =
{
    uname: "jarvis@gmail.com",
    UPI: "jatrvis@paytm"   
}
console.log(usr1.uname);  //here we use ". dot" operator to acces the element of object
 let usr2 = usr1
 
 usr1.uname= "edith@gmail.com"

 console.log(usr1.uname);  //The Uname gets change in both usr1 and usr2
 console.log(usr2.uname);  //the value gets change in both because of call by refrence