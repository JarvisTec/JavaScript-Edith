const str1 = "Hellow-world"
const str2 = "Jarvis"

// console.log(str1 + str2)         //this is code but i put it this into cmnt 
// console.log(str1 + str2 + "557") 

//here we add another thing so it not necessary which we declair only those can concatinate we add another things like number, srting etc.
// Buth these syntax are now older now a days they are used

// Now presently we use backticks (``) the biggest advantage is that we jus need to write varible name between "{}" and the value of that varible displays
// in this we can directly inject the varibles by its name this is called "String interpolation"
// Example
let name = "jarvis"
let day = "Sunday"
console.log(`Hii ${name} Today is ${day}`)  //string interpolation

// so if we want display / use varaible value the we jus need to write the name of that varible
// And we can add number of methods with varible means on string interpolation 

// we can display each letter of any string by "key value pairs"
// like "Jarvis" its length is 6 using 6 letters but star with 0
console.log(name[0])  // it shows J because J is placed on 0 

//some other methods 
console.log(name.length);   //shows length of string
console.log(name.toUpperCase()); // string change case 
console.log(name.charAt(4));   //check place of characters
console.log(name.indexOf('a'));    //on which index a is placed

name = name.substring(0, 4); //it displays letters whose index is 0 to 3
console.log(name);          //that mean result is Jarv

const id = "Edith"
const id2 = id.slice(-4, 2)  //it display d
console.log(id2)

const marvel = ["Ironman", "Captain", "Thor", "Natasha"]
const Avangers = marvel.slice(-3, 2)    //it display Captain
console.log(Avangers)


const stdName ="    Peater    "
console.log(stdName);   //by this it displays space in string
console.log(stdName.trim()); //it skips space of string

// replace method of string
// number of website %20 is used for spage and we want to remove this and replace with - to represent space 
const url = "https://jarvis.com/edith%20markII"  
console.log(url.replace('%20', '-'));

// if we want to find any keyword in any url or any other thing then how we know

console.log(url.includes('jarvis')); //it displays true because url contains keyword "jarvis"
console.log(url.includes('stark'));//it displays true because url does not contains keyword "stark"


// split makes
let std1 = "Ab-Hameed-Wani"
console.log(std1.split('-')); //we can split any string and make array but on seprator like here '- dash' is seprator. we can split string where is '- dash' their string splits and make array 

let std2 = "Ab Hameed wani"
console.log(std2.split(' '));   //here 'space' is seprator

//Note: to Know more methods of string; open browser, then open console view, write this code "const std2 = new String('jarvis')" , press enter and then write std2 press enter the it displays "String {'jarvis'}" click on small aero and then click on prototype aero and you got number of methods. 