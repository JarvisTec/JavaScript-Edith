//Arrays
//Array is an Object it is collection of multiple data type elements and in JS array are resizeable means if we declair Array and store 5 or 6 elements after that we can add more elements.
// in Array we can access values / elements of array on index number like index number of 1 [0], 2[1], 3[2] etc and indexing start from 0
//we have deep and shallow copies but in Js when we make copies of Array it makes shallow copies which means it use refrence of Array to copy the value like Stack data type (call by refrence, chance original value)
// Deep copies use duplicate value (call by value).

const myArray = [1, 2, 3, 4, 5]
const marvel =["Iroman", "Captain", "Thor", "Natasha"]
const myArray2 = new Array(1, 2, 3, 4)

console.log(myArray[1]);    //Output: 2 because index is 1


//Methods of array
myArray.push(6, 7)   //this ".push(New_value)" is used to add new value 
console.log(myArray);    //Output: [ 1, 2, 3, 4, 5, 6 ] element 6 added
                        //we can add another number in same ()
myArray.pop();  //this is used to remove last value of array. and no argument pass in "pop()"
console.log(myArray);    //Output: [ 1, 2, 3, 4, 5, 6 ]


console.log(myArray.includes(8)); //used to check element which is passed as an argument is their or not that mean it gives output on boolean data type (true/false)

console.log(myArray.indexOf(2));  //use to check index number on element like here we hace 2 and it shows the index num of 2

const newArray =myArray.join() //this binds our array means make it in single and convert into string data type
console.log(myArray);   //Output: [ 1, 2, 3, 4, 5, 6 ]
console.log(newArray);  //Output: 1, 2, 3, 4, 5, 6
console.log(typeof newArray);  //Check data type i.e string


//Slice, Splice
console.log("A ", myArray);  //simply display array but withname i.e A
const newArray2 = myArray.slice(1, 3)  //we creat newArray2 which equals to myArray with and another operation "slice()" it returns a section of array means a pictular part of array depedent on, which value provided as an argument i.e 1,3 Actually this argument indecates the index number of array here argument is 1,3 means index number 1-3 displays except index number 3rd ie(2, 3) is an Output.

console.log(newArray2);    //Output: 2, 3

console.log("B ", myArray); //here "B" with "myArray" is an actual array ie [1,2,3,4,5,6] it is jus display to know is any effect on actual Array with "Sclice" or not but here their will no effect on actual Array. Sclice jus returns a section of array depedent on index number range. 

const newArray3 = myArray.splice(1, 3)  //Splice operation

console.log("C", myArray)    //with this it changes the whole actual array it removes all elements which are in range (which we passing as an argument) means at index number 1,2,3 elements are removed and other elements are present
console.log(newArray3);


//To know more methods of Array use console in browser and write.
// const myArray=[1,2,3,4]  press enter
// then write myArray
//Ayyar displays and click on small aero and we get number of methods