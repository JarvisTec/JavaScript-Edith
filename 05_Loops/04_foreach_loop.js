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


