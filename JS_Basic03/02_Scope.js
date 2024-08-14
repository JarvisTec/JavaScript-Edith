// scope resulation of varaibles in functions 
// when we declair varible we use some keywords like



// these are the three ways to declair varible and if we want to display they can easily run but their is a difference and the problem is in scope of function or condition statements



if(true)
{
    let a = 10
    const b = 10
    var c = 10
}

// console.log(a);
// console.log(b);
// console.log(v);

// if we run this code it gives error it shows a, b are nor defined .
//So here is we need scope. here a,b,c are the 3 varaible declair within "if (condition)" and a, b are declare by "let" and "const" whos scope resulation or life is withing the codeblock of "if" and "c" varible id declair by var whose scope is global means can be accessed by throughout programme
//in this varaible "c" is declaired but if declare this varible "c" again it shows error because it have global scope 
// Now we know that "a&b" varibles are declared if we declair again yes we can but outside that scope where it is declared.


// 2nd part of Scope:  Nested Scope & Clousers



function one()
{
    const username = "jarvis"

    function two()
    {
        const website = "youtube"
        console.log(username);        //accessing f1 var
    }
    // console.log(website);             //accessing f2 var
    two()                   //it excutes very well 
}
//we know that here we are accessing fun2 varaible but which is in fun1 i.e we call fun1

one()    

// heare we craet a function2 into another function1 and we access the varible of f1 into f2 and varible of f2 into f1 which shows error because when we accessing var of f1 into f2 that runs / excutes because that is his parente var which can be accessed but when f1 access var of f2 it shows erroe because that var is chaild var 
// So in generally we can say that internal fun and access var of outer fun and outer fun can not access var of inner fun


//Scope with if statement


if(true)
{
    const name = "Jarvis"
    if (name === "Jarvis")
    {
        const age =  20
        console.log(name + age);
    }
    // console.log(age);
    
}
// console.log(name);




