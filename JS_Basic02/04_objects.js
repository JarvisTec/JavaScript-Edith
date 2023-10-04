// Singleton and Non-Singleton Object

const user = new Object()  
// diclaration of object by singleton and shows empty oibject
const user1 = {}   
// diclaration of object by non-singleton and shows empty oibject
//now we add some properties of user1
user1.id = "121a"
user1.name = "jarvis"
user1.login = false

// console.log(user);
// console.log(user1);  
// display the value of objecr "user1" 


//object declair inside Object
const user2 = 
{
    email : "edith@gmail.com",
    otherdetais: 
    {
        basicDetails : 
        {
            name: "edith",
            age: 26
        }
    }
}
//here we creat an object namely "user2" inside "user2" we have email and then we have an object "otherdetails" declaired inside "user1". and in "otherdetails" we have another object "basicDetails" and inside "basicDetails" we have name, age properties.
//how we access the properties of each Object
// console.log(user2.email);  
//this displays jus email
// console.log(user2.otherdetais); 
//Output: { basicDetails: { name: 'edith', age: 26 } } 
//it displays an object "basicDetails" and its properties.
// console.log(user2.otherdetais.basicDetails); 
//Output: { name: 'edith', age: 26 }
//it displays the properties of "otherDetails" object
//And now if we want to acess the pictular property of an object "basicDetails" the.
// console.log(user2.otherdetais.basicDetails.name); 
//Output: edith


//Merge objects or we can say properties of an objects
const obj1 = {1:"c", 2:"d"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// console.log(obj3)
//Output: { obj1: { '1': 'c', '2': 'd' }, obj2: { '3': 'a', '4': 'b' } }
//this output gets merged but sepratly which is not correct

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3)
//Output: { '1': 'c', '2': 'd', '3': 'a', '4': 'b' }
//we can write by another way i.e
// const obj3 = Object.assign({}, obj1, obj2)
//the difference is jus in ist case when we get return value which is combination of "obj1" and "obj2" it stores in "obj1" and then displays. but in 2nd method we give 1 empty obj "{}" means return value goeg into that empty Obj and displays, but this {} is an optional.
//but this is not generally usede yest it is but not mostly.


//Another menhod is seprade operator using 3dots "..." same as array.

const obj3 = {...obj1, ...obj2}
// console.log(obj3)
//Output: { '1': 'c', '2': 'd', '3': 'a', '4': 'b' }
 

//Another method is that when we get data from database it comes in array of objects form. means number ob objects in single array

const users =
[
    {
        id: 01,
        email: "jarvisnet@gmail.com"
    },
    {
        id: 01,
        email: "jarvis112@gmail.com"
    },
    {
        id: 01,
        email: "jarvis123@gmail.com"
    },
    {
        id: 01,
        email: "jarvi121@gmail.com"
    }
]

users[1].id
console.log(user1)

console.log(Object.keys(user1))
//by this we get the array keys of object "user1" keys are "Id, Name, Login"
//same we get values of these keys jus write "values" insted of "keys"
console.log(Object.values(user1))

console.log(Object.entries(user1))
//it provide us each key with values in array like ['id', '121a']

//if we use loops in an objects and we are access any value, or we can say value of any property but if that property does not exist their then their is lot of change of to crash. so we ned to know is that property exist or not for this we use.

console.log(user1.hasOwnProperty('id'))
//if exists the value is true otherwise false


//to know more abt Objects in browser open console tab an write " const obj1 = {1:"c", 2:"d"} " hit enter and write "obj1" hit enter click small error and get number of methods

