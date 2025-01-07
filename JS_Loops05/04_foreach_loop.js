// it uses a function differently than the classic “for loop”. It passes a callback function for each element of an array together with the parameters
// but here we jus rite function keyword not function name like in code.

const marvels= ["Ironman", "captain", "Thor", "Spider"]

  marvels.forEach(function (items){   //items: items of an array
    // console.log(items);
    
  })  


  // we can use aero functions for call back
// syntax of aero function ie.
// fun_name = () => {}   but here we use without name of function 

  marvels.forEach( (val)=>{
    // console.log(val);
    
  })



// here we take array of objects and use by ForEach Loop


const myarr =[
  {
    name:"student",
    class: "8th"
  },
  {
    name:"student2",
    class: "9th"
  },
  {
    name:"student3",
    class: "7th"
  }
]

myarr.forEach( function(item){
  // console.log(item.name);
  
})


// for each loop can return value because there we use function so let us se

const avangers = ["stark", "Captain", "petter", "Thor"]
//here we store for_each loop in varible to check what it returns but in actual it never returns any value

const val = avangers.forEach( (items) => {
  // console.log(items);
  return items;        
} )
// console.log(val);


// Filter: The filter() method creates a new array containing elements that satisfy a specified condition. This method skips empty elements according to condition and does not change the original array.
// Create a new array consisting of only those elements that satisfy the condition
// so here we use condition but in for_each loop we take all items of given array.


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newnum = num.filter( (items) => items%2 == 0)  //Implicit
// console.log(newnum);

// Implecit: automatic return a value without {} braces 

const newnum = num.filter( (items) => {return items%2 == 0})  //Explicit
console.log(newnum);



//Use filter on vast data eg

const class1 = [
  {name: " Student1", marks: "445", Grade: "A"},
  {name: " Student2", marks: "325", Grade: "A"},
  {name: " Student3", marks: "375", Grade: "B"},
  {name: " Student4", marks: "425", Grade: "A"},
  {name: " Student5", marks: "355", Grade: "b"},
  {name: " Student6", marks: "225", Grade: "C"},
  {name: " Student7", marks: "285", Grade: "C"},
]

const std = class1.filter( (value) => )