// for of Loop
 // for of loop not working on Objects because objects are not ittratable but there is some methods where we can use for of on Objects 

// for (const element of object)      //elements may any var like i, num, x, y, z etc
//     {                              
//                                     //here this object which is in syntax it is notdatatype object it may anyting eg. array, string, objects etc 
//     }



const arr1=[1, 2, 3, 4]

for (const i of arr1) 
    {
    // console.log(i);
    }


const str="Jarvis"
for (const i of str) 
    {
    // console.log(`${str}`)
    }


    // Maps:   this is object datatype where we store keys and values but in other datatypes like Array, String, Objects etc if we entere duplicate values means if we enter same values they print all values even it is repeat.
    // but in Maps repeated values are not printed
  


    // Syntax of maps
    // const map_name = new Map            map_name may be anything
    // map_name.set('key', "value")

    const map_name = new Map()
    map_name.set('Std1', "25")
    map_name.set('Std2', "28")
    map_name.set('Std3', "26")
    map_name.set('Std4', "27")
    map_name.set('Std4', "27")   //here it is repeated but it never print


    // console.log(map_name);


for (const i of map_name)   
    {
    // console.log(i);
    }
    


    // but we want to print sepred these keys and vaslues then use like this
for (const [key, value] of map_name) 
    {
    // console.log(key, ':', value);
    }


    // for of loop not working on Objects because objects are not ittratable so we use for in loop

    // for in used on Objects

    const myObj =
    {
        'Name': "Jarvis",
        'Age': "26",
        'Gender': "male",
        'PhNo': "123456789"
    }

for (const key in myObj)    //by this it shows jus keys not values
    {
        // console.log(key);  
    }

for (const key in myObj)    //by this it shows keys and values
{
    // console.log(key,":", myObj[key]);  
}


for (const key in myObj)    //by this it shows keys and values
{
    // console.log(`the value of ${key} is,":", ${myObj[key]}`);  
}



// for in with Array 

const arr = ["HTML", "CSS", "JS", "REACT"]
for (const key in arr)    //objects have keys but arrays have also keys ie index num     
    {
        // console.log(key);  //it prints only keys 
    }



//in this it prints only value of array
for (const key in arr)    //it prints keys and value of array     
    {
        // console.log(arr[key]);  
    }

    
//it prints keys and value of array
for (const key in arr)    //it prints keys and value of array     
    {
        console.log(key, ":", arr[key]);  
    }