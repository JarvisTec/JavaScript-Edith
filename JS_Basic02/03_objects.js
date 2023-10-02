// Objects
// two ways to declair objects 
// 1. literal 
// 2. constructor
// when we make object  by constructor is is also called singleton
// like declaration of an Object through constructor i.e
// Object.creat 
// in object here are keys and values like in given example name is key and Jarvis is value. In JS we can define keys and also values, Bydefault JS traeats key as string like key name acts "name" as string, we don't need write as string it takes automatacly as string.

// diclaration of symole 
const mySym = Symbol("key1")

const user1 =
{
    name:"jarvis",
    "status" : "Active",
    age : 25,
    [mySym] : "key1",
    email : "jarvis@gmail.com",
    logedin : "false",
    logindays : ["monday", "Tuesday"]
}
// console.log(user1.email);
// console.log(user1["email"]); 
//this is an another way to access the elements of an object without ". dot" operator
// Reason why we use without ". dot" operator because if any element of an Object is in string form then their we can't use ". dot" operator like "Status" element of User1 object.

// console.log(user1["status"]);
// console.log(user1[mySym]);  
//here we display the value fo symbol key yes it displays easyly by it does not treats as symbol data type it acts as string data type. to treats as symbol data type we need to write in [] brackets like [mySym]


//Replace value of keys eg. change email
// user1.email = "jarvisnet@gmail.com"
// console.log(user1["email"])   
// //to freez an object. means after freez we can't change any value of any key
// // Object.freeze(user1);
// user1.email = "edithnet@gmail.com";  //email can't be changed because freez()
// console.log(user1)  

//Add function inObject as key/ element of an Object. and these functions are treat as simple varible.

user1.greeting = function()
{
    console.log("Hello Jarvis");
}
console.log(user1.greeting());    
//before run this remove or diable codeline which freezs object. because we know that if we freez object then we can't add any function inan object.
console.log(user1.greeting);  //if we give ".greating" without () parenthises it returns "[Function (anonymous)]" 


//another functtion here we are refrencing one of property of an ibject "name" for this we use "string interpolation" with backticks.
user1.greetingTwo = function()
{
    console.log(`Hello Jarvis, ${this.name} `);
}
console.log(user1.greetingTwo());    
//The difference is that inprevious we display only value but here we are also refrence with property of an Onject with "this" keyword.
//and if presently undefined is shown in result jus ignore this time
