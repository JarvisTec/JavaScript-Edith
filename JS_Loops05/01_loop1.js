// For Loop

// for (let i = 0; i < 10; i++) 
// {
//     const element = i;
//     console.log(element);

// }


// programme for make table 
let a = 5

for (let i = 1; i <= 10; i++) {
    // console.log(a, 'X', i, '=', a*i);
    
}


// Another programme

for (let i = 0; i < 10; i++) 
    {
        const element = i;
        if (element == 5)          //ait i = 5 it prints "Thanku"
        {
            // console.log("Thanku");
        }
        // console.log(element);
    
    }



//Nested Loop

for (let i = 5; i <= 10; i++) 
{
    // console.log(`value of i = ${i}`);
    
    for (let j = 1; j <= 10; j++) 
    {
        // console.log(i, "X", j, "=", i*j);
        
    }
}



//for loop using array

const myarray = ["iroman", "captain_america", "Thor", "Petter"]
// console.log("length of array: ", myarray.length);  

//this shows length of given array like here we have 4

for (let i = 0; i < myarray.length; i++) 
{
    const element = myarray[i];
    // console.log(element);
    
}


// using "break" & "continue" in for loop

for (let i = 1; i <= 20; i++)
{ 
    if (i == 5) 
    {
        // console.log("here value is 5 so it stops here");
        break;            
    }
    // console.log(i);
    
}


// continue

for (let i = 1; i <= 20; i++)
    { 
        if (i == 5) 
        {
            console.log("here value 5 not display");
            continue;           //here it skips value 5
        }
        console.log(i);
        
    }