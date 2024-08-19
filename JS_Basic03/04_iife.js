// Immediately Invoked Function Expressions (IIFE)
//this function is used to excute immediately two main reasons to use this function

//1. if we make a file where we have only database connection means that file is responsible for to make connection with database in that file we use IIFE function so that it excutes immediately and make connection with database quickly

//2. in any file we have number of global varibles and these varibles can access by any function on any if statement or any loop because we know that global var can be access but not local var so these global var poluted the code means it reduces the speed littlebit but we want to excute some code immediately that time ew use IIFE function

(function edith()
{
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// stateterminator is manditotary when we use number of IIFE function


// IIFE function by using aero function 
( (name) => 
{
    console.log(`DB CONNECTED TWO ${name}`);
} )('jarvis')