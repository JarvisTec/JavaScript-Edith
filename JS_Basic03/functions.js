// functions
function Myfun()
{
    console.log("hellow Jarvis");
    console.log("hellow Jarvis");
}

Myfun()   
//here we call the function and it excuter where "MyFun" name of function if we write only function name say "MyFun" it is jus refrence of function anf if we write "MyFun()" then it excutes



// Function add two numbers

// function addnum(num1, num2)  //here we pass 2 vales as in parameters
// {
//     console.log(num1 + num2);
// }

// addnum()

 // here if we didn't pass any arguments like "addnum()" then it shows "NaN" 
 //so we need any arguments because in function we are passing 2 vals 

//  addnum(5, 10)

//  here we give 2 arguments now it shows result & we know if we pass number value what will hapen and if we pass string and number etc like: 

// addnum(5, "10")
// addnum(5, "ab")
// addnum(5, null)

// PARAMETERS & AGRUMENTS: When we pass the values in function declaration that is called "parameters" and When we give values when function is call for excution is called Arguments

// we can store value of function in varible


// let result = addnum(5, 6)

// console.log("Result is:", result);


//Here we asume the value of result is "11" but it is undefined but also it shows output ie "11" the why result is "undefined"
// So which output / value returens by the function so we need to return any value & this "11" output comes because of "console.log()" not returns any value



function addnum(num1, num2)  //copy of ist functon
{
    // let res = num1 + num2
    // return res

    return num1 + num2      //2nd method

    console.log(result);  //can't run because after return 
    
}


let result = addnum(5, 6)

console.log("Result is:", result);


// now the value of result is "11" because here it returns a value of result
// Remeber after "return" keyword in function definetion code can't excute liek "console.log(result)" code it can't excute 


// Login Msg function

function lgnmsg(username)
{
    if(username === undefined)  //this excuter when no arguments are passed
    if(!username)               //another way to write thic same code
    {
        console.log("please enter a username")
        return   //this return is so that next or outside of "if" code can't excute
    }
    return `${username} you are login sucesfull`
}

lgnmsg("Jarvis")
// here functions excutes but not show result because we didn't write code to show result like:

// console.log(lgnmsg("Jarvis"));

//  now if user does not pass any arguments then function returns "Undefined" like

console.log(lgnmsg());

// Here we can ise conditional statement to check is any value pass as arguments


