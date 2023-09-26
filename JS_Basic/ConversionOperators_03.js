let age = "24"   //here age var is declair
//we know the datatype of age i.e string because bwteen two Qutes""
//but if any time we did't know the datatype then by these two ways we can know the datatype fo any varible 
 console.log(typeof age);   //here it is string
 console.log(typeof (age));     //here it is also string

//  Now we know the data type of varible i.e string and we want to change the data type of varible means conversion of data type then we write code i.e

let convNum = Number(age)   //here we convert data type string into Number where convNum is a varible 
console.log(typeof convNum)


// Now iof we creat any varible and providing number + letter we know that it is string but if we convert that  string var into Number is convert or not and if convert then  which value it displays is number only or letters onnly or string or nothing. let us know.
console.log("From here we creat another Var and convert into Num but for checking valu")
let reg_no = "a"
console.log(typeof reg_no)  //here it is string
// now conversion
let regNum = Number(reg_no)     //here it converts into Number
console.log(typeof regNum)      //data type of var is nuw Number
// now checking display value
console.log(regNum)        //Here we are trying to display the value of regNum var after conversion whose name was reg_no before conversion it displays NaN, which means "Not a Number". Now we know that string converts into Number but it never displays the value which is mix of number and letters it jhus displays only when value is in number form. And if we set "NULL" as value then result will be "0" And if we set "UDEFINED" as value then result will be "NaN" And if we set "TRUE" as value then result will be "1" And if we set "FALSE" as value then result will be "0"
// yes we can convert very well but later on......?

// Now if we convert Boolean 
let lockin = 0
let lockedIn = Boolean(lockin)  //heare var changed into Boolean
console.log(lockedIn);     //it displays "true" because value is 1 if it is 0 the value is "false"  but is value of varible is anmy number string it displays "true" but if value is "" empty string it displays "false"

// Means we can convert every data type