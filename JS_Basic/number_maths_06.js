const score = 5   //this is old way to declair number varible
console.log(score)     //this displays jus value of score i.e 5

const blance = new Number(200)
console.log(blance)     //but this shows value with data type i.e [Number: 200]
// and when we run this code in browser we can know the number of methode/properties or we can say different proto types of number data type

// Let us try some prototypes of Numbr data types 

console.log(blance.toString())  //here data type of blance is Number converts string
//now we can use number of string properties which we used in string data types like:

console.log(blance.toString().length) 

// Another method of Number data type like "toFix"
console.log(blance.toFixed(2))  
//this is used when we want to display a dicimal number and how many digits that we want to display after precision means after dicimal point that is depedent on what we provide the value as argument of "toFixed()" function 

// Another medthod is of precision value 
const num = 224.9389
console.log(num.toPrecision(3)) //it displays the aproxmate value but displays three digits and is three digits with precision or without thid depedent upon the value of argument of "toPrecision()".

//And how we know the minimum value and Max value of Number data type 
// in browser, open consol tab, and Write Number.MIN_VALUE and for max write Number.MAX_VALUE


//Maths Library
// Maths labrary comes by default with JS 
console.log(Math);      //actual math is an object ii contains number of object but here we cant see these properties we can see in console view in browser

// hear we discus some important and most used functions of math 
console.log(Math.abs(-4))    //it converts -ive values but if we have +ive the value remains same +ive 

console.log(Math.round(5.6));  //it gives aproxmate value to avoid dicimal values
console.log(Math.ceil(4.2));   //with this it give value without dicimal value but it gives preroity upper value like we have "4.2" means more than "4" then it displays 5 
console.log(Math.floor(4.4)); //it displays "4" insted of "5/4" because it prefers lower.
// ceil means upper and floor means down

console.log(Math.min(2,5,2,8,4)); //it takes array of input and gives min val
console.log(Math.max(6,3,6,86,46,7,4)); //it takes array of input and gives max val

console.log(Math.random()); //value of this always between 0 and 1 and we know that value comes in dicimal form it may b 0.1122, 0.368326, 0.6823387
// But if we want that the value never be equal 0 then 
console.log(Math.random()*10); //in this case we multiple with 10 but if any time the value of "random()" function comes 0.08636 the it is 0 because when we multiple with 10 after dicimal points ist numbe comes before means if value of "random()" is 0.78645 the with multiple with 10 the value comes 7.864 but value of "random()" function comes 0.08838 then it is 0.3338 that is not correct so that is why we add with 1 like
console.log(Math.random()*10+1);  //this is correct but best way is
console.log((Math.random()*10) + 1);  //it gives value 1 - 9 and 1 is used to avoid 0

//we can add floor function with "random()" so we get single digit but lower number
console.log(Math.floor(Math.random()*10) + 1);

//this "random()" function gives number of values but if we want to get value between some numbers the we need to set Min and Max value like
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min);