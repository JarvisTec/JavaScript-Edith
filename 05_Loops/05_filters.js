// Filter: The filter() method creates a new array containing elements that satisfy a specified condition. This method skips empty elements according to condition and does not change the original array.
// Create a new array consisting of only those elements that satisfy the condition
// so here we use condition but in for_each loop we take all items of given array.


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newnum = num.filter( (items) => items%2 == 0)  //Implicit
// console.log(newnum);

// Implecit: automatic return a value without {} braces 

const newnum = num.filter( (items) => {return items%2 == 0})  //Explicit
// console.log(newnum);



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

// const std = class1.filter( (value) => value.Grade =="A")  //single check
//double check filter
const std = class1.filter( (value) => value.Grade =="A" && value.marks>"400")
console.log(std);
