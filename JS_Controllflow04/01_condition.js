// if statement


let tempature = 55

// if (tempature < 50)    //if condition is true code excutes if not then code doesn't excute
// {
//     console.log("tempature is lessthan 50");
    
// }
// console.log("tempature is greaterthan 50");



// in if statement or if else we can number of comparision operators like:
// <, >, <=, >=, ==, ===, !=


//if else statement

// if (tempature < 50)    //if condition is true code excutes if not then code doesn't excute
// {
//     console.log("tempature is lessthan 50");
    
// }
// else
// {
//     console.log("tempature is greaterthan 50");
// }



//another condition

// let score = 150

// if (score > 100)
// {
//     let result = "Pass"
//     console.log(`Student is: ${result}`);
    
// }

// console.log(`Student is: ${result}`);   //this code shows error because of scope



// Short_hand Notation

const bal = 2000

if (bal > 500) console.log("Balance is good");   

//without "{}" braces this is implecit scope means it agres that there is a scope 
// but it excutes in singlel line and at end statement terminator because in single line 
// we can write in multi lines but it us unredable it can excute but unredable, Like:

// if (bal > 500) console.log("Balance is good"),
// console.log("This is second line");


// Nested If Statement

let marks = 750
 if (marks > 900)
 {
    console.log("Grade A");
 }
 else if (marks > 700)
 {
    console.log("Grade B");
 }
 else if (marks > 500) 
 {
    console.log("Grade C");
 }
 else if (marks > 300) 
 {
    console.log("Grade D");
 }
 else
 {
    console.log("You are faill");
 }




//if statement check multiple conditions

let username = true
let password = true
//here we are checking two conditions boath must be true because we use AND operator and we can use also third condition Like:

// if(username && password && another_condition)
if (username && password)     
{
   console.log("You are loged in sucessfully");
}



// 2nd way to check multiple conditions by "OR (||)" operator in thius we give 2 conditions anyone must be true and here we can also check number of conditions

let phno = true
let email = false

if (phno || email) 
{
   console.log("you are loged in");
}