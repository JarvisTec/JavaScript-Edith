// Truthy

const userEmail = []

if (userEmail)     
//it evulates true because their is email id but if it is empty string then it evualted false
{
    console.log("Got user email");
} 
else 
{
    console.log("Don't have user email");
}

//if value is empty string "" then it treats condition is false and else codeblock excutes but if value is empty array [] it treats condirion is true and it excutes the code of if statement

// some conditions where condition evulates true and where it evulates false 

// falsy valuse

// false, 0,-0, in BigInt there is (0n), "", null, undefined, NaN 


//truthy values
// "0" zero is falsy but here it is in string form, 'false', " ", [], {}, function(){} (emty function)