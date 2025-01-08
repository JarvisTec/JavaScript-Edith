// Dates
let myDate = new Date() //displays date but not good form so....?
console.log(myDate)

console.log(myDate.toString());   //convert into string and we have number of different methods let us check.
console.log(myDate.toDateString())  //output: Fri Sep 29 2023
console.log(myDate.toISOString())   //Output: 2023-09-29T14:55:18.802Z
console.log(myDate.toLocaleString())   //Output: 9/29/2023, 2:56:24 PM
console.log(myDate.toLocaleTimeString())   //Output: 2:57:03 PM
console.log(myDate.toTimeString())   //Output: 14:57:58 GMT+0000 (Coordinated Universal Time)   

//check Data type of myDate varible
console.log(typeof myDate)    //Data type is Object


// to set date by own self / take date as input
let myNewDate = new Date(1998, 3, 05)
console.log(myNewDate.toDateString())   //output: Sun Apr 05 1998

// to set date by own self with Time
let myNewDate2 = new Date(1998, 3, 05, 02, 50)
console.log(myNewDate2.toLocaleString())   //output: 4/5/1998, 2:50:00 AM

// taking input date another method by 
let myNewDate3 = new Date("2023-01-20") //in dd/mm/yyy month start from 1
console.log(myNewDate3.toLocaleString()) //output: 1/20/2023, 12:00:00 AM



// when we make some projects and we need to compair miliseconds like in questions and answers who give ist ans that is winner their we use method called "Time stamp"

let myTime = Date.now()
console.log(myTime);    //Output: 1696002182880 time in miliseconds from whre ECMA script starts which is 1970 so when we compair thi with current date.
console.log(myNewDate3.getTime());  //Output: 1674172800000
//so we have two dates in miliseconds and we can easily compair 
//but how if 2 persons send answer at same time how we know the whic one sends ist there we compair in miliseconds.
//exampele
let cndidate1 = new Date(2023, 3, 05, 02, 50)
let cndidate2 = new Date(2023, 3, 05, 02, 51)
console.log(cndidate1.getTime())        //Output: 1680663000000
console.log(cndidate2.getTime())        //Output: 1680663060000
console.log(cndidate1.toLocaleString())  //Output: 4/5/2023, 2:50:00 AM
console.log(cndidate2.toLocaleString())  //Output: 4/5/2023, 2:51:00 AM

// so we know that cndidate1 gives ist ans 

// convert miliseconds in seconds 
console.log(Date.now()/1000)  //Output: 1696003027.346 in Sec
//but we want to display in without dicimal form
console.log(Math.floor(Date.now()/1000))   //Output: 1696003214

// miliseconds and seconds get change because time changes 


//Other Methods of Date time
let crtTime = new Date()
console.log(crtTime.getDate())
console.log(crtTime.getDay())
console.log(crtTime.getMonth())
console.log(crtTime.getHours())

// to display date time wit best way using String Interpolation
console.log(`the Date is ${crtTime.getDate()} And the Month is ${crtTime.getMonth()}`)


