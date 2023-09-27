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
 