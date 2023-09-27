// comprasion operators are 
// < lessertha
// > greaterthan
// <=   lesseror equal
// >=   greater or equal
// =    comprasion
// ==   assgin any value
// !=   not equals

console.log("2">1);  //comprasion operator some times does not give predectaible value when we use different operands / values means in terms of datatypes and "TypeScript" is a type of lang which never alwos to provide different datatype values
console.log("02">1)

// now what abt null
console.log(null < 0)       //false here null is empty
console.log(null == 0)      //false 
console.log(null >= 0)      //true because here it treats as numbe 0. That is anither reason that these types can't provide predectable value

// Here we have another thing Strict check
// === triple equal is struct check. it does not check only value  but also checks the data types eg
console.log("2" == 2);  //true
console.log("2" === 2); // false because here it also checks datatype