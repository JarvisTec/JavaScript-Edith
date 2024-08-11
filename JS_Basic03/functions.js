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
//
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






// Creat functions to take number of values or pass number of values like in shopping cart where user add number of items having different price ehic is added also


function cartitem(...item1)
// function cartitem(val1, val2, ...item1)         
{
    return item1
}

console.log(cartitem(200, 150, 450, 510, 210));    

// in this function we pass one value but user can add number of items in Cart means as arguments number of values may be passed in that case it gives one value only SO in this case we  use "RestOperator" in parameters like as "Sepred Operator" depedent where we use
//But result gives in "Array []"
//"function cartitem(val1, val2, ...item1)" by this we get 3 values because ist 2     values are stored in "val1" & "val2" and rest of values stured in "item1"





// using Objects in function******************

const obj=
{
    name: "jarvis",
    id: 2591
}

function handelobj(anyobj)   //hewrw we pass "anyobj" as temp because if we have more Obj
{
    console.log(`User's name is ${anyobj.name} and ID is ${anyobj.id}`)
}

// handelobj(obj)        //ist way to call function

//in this function we are not passing object directly because if we have number of objects so for that we pass a valve in parameters as temp "anyobj" but when we call the function we give the object as argument ie "obj" by this object are passed in parameters and it dedetc the object and display values which we want to display in an function 

// Now if "name" or "ID" is not present or spelling is not matched in an object their we use condition statement

handelobj({
    name: "Edith",
    id: 5903
})        
//2nd way to call function in this we creat an object withi arguments here we are not passing object as argument by its name but we declare object within argument





//function using arrays************************


const arr = [25, 38, 96, 75]

function handelarr(anyarr)   //hewrw we pass "anyarr" as temp because if we have more array
{
    return anyarr[1]
}

// console.log(handelarr(arr));

console.log(handelarr([25, 38, 96, 75]));


// Same as we can pass arrays by declaring Arrays withing arguments


