
// First disscuss "This" Keyword

// In this programme we are discussing "This" keyword which is used to reffer current context.
//in this programme we create an object inside this we have number of keys and its values one of the key is "lgnmsg" and its value is function so in this object we add a function
// in this function we are displaying a login message for this we use "string Interpolation" so in {} we can write username but not directly here we use "This" keyword because it reffers same context means this is within same object which we want to display so in this cases we use "this" keyword to reffer same context 



// const user = 
// {
//     username: "Jarvis",
//     age: 20,

//     lgnmsg: function()     //here we add function in an object
//     {
//         console.log(`${this.username} , welcome to my website`);
//     }
// }

// user.lgnmsg()     //here we use () because it acts as method


// if anyother logins and enter his name means if username change


// user.username = "Edith"
// user.lgnmsg()          //here username changes 


// so context us user which logins like ist "jarvis" then "edith" or we can say context are values 



// haere i'm writing same code but do some changes


const user = 
{
    username: "Jarvis",
    age: 20,

    lgnmsg: function()     
    {
        console.log(`${this.username} , welcome to my website`);
        // console.log(this);     //here we are using new code / add some code
        
    }
}

// user.lgnmsg()

//this shoiws all the context of an object here context is "username", "age" & "lgnmsg" which ia a function

// if we use "this" keyword outside th object like 

console.log(this);

//this shows empty object {}  because their is no global object but when we use "this" keyword in an object it show value because "this" is used in locally

// But if we use "This" keyword in browser it shows "window"




// function edith()
// {
//     console.log(this);
// }
// edith()    
// it shows lot of function and properties of function 



function edith()
{
    let username = "jarvis"
    console.log(this.username);
    
}
edith() 
// it shows undefined because "this" keyword is not working in function it jus work in objects 
