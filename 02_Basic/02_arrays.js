const marvel = ["Iroman", "Thor", "Spiderman", "Captain"]
const Grd_Glx = ["Petter", "Grute", "Rocket", "Gummora"]

// marvel.push(Grd_Glx)  
//with this we think arrays gets merged it gets but not good form. and push give val on exist array.
// console.log(marvel); //Output:  ['Iroman','Thor','Spiderman','Captain',['Petter','Grute', 'Rocket', 'Gummora' ]]

//Why output is not good form. we know that we can store any kind of data in array which means we can store array inside another array same care here array "marvels" hve 4 elements and we push "Avangers" array inside marvel not the elements of "Avangers" so, now "marvel" have 5 elements "4" its own and 5th "Avangers" it treats all elements of "Avangers" as single element.

//we have different methods for merge arrays but bets way is "concat()"
const Avangers = marvel.concat(Grd_Glx)  //concat() give return another array.
console.log(Avangers);  //Output: ['Iroman','Thor','Spiderman','Captain','Petter','Grute','Rocket','Gummora']

//We have another method to merge ie "sepred denoted with ... 3dots" actually it seprates all elements of two or more array an make it in single array at the end it gets merged.

const Avangers2 = [...marvel, ...Grd_Glx]
console.log(Avangers2);  //Output: ['Iroman','Thor','Spiderman','Captain','Petter','Grute','Rocket','Gummora']

//ANother menthod when we have Array inside another array whis is also in another array totall we can se number of nested arrays. an how we can make it in single array.
 
let array1 = [1,2,3,[24,5,6],7,4,[9,[4,22]]];
let array2 = array1.flat(Infinity)  //we give infinity as argument we give The maximum recursion depth, in simple words number of nested level of arrays, but give infinity so that it can automataclly merged all arrays.
console.log(array2)


//When we select data from any webpage it is in the another form eg. node_list, Objects, String etc. but we want to in array form because we use loops on array.
//So when we select data we can tell what is the form of data that we select and also direct convert but here ist we tell and then convert.
console.log(Array.isArray("Jarvis"));  //here we are trying to tell is "jarvis" array or not
//No to convert into array
console.log(Array.from("Jarvis"));   //here we can give any type of data and conver into array.

console.log(Array.from({name: "Jarvis"}))
//it giver empty valye because here we provide object data type so it can't convert directly, if we want to make it array we need to ist specify some things like object have keys, values etc so we need to specify is we ant to make array of keys or values etc. otherwise it makes empty array 


//Now if we have different varibles and values and we want to mak an single array of all varibles.
let val1 = 120
let val2 = 160
let val3 = 220
let val4 = 130

console.log(Array.of(val1, val2, val3, val4))  //Returns a new array from a set of elements.


