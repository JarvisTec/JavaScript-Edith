const id = 121
let email_id="jarvis@gmail.com"
var pwd = "abc123"
city = "srinigar"
// city varible have no given value so it shows undefined

/* id = 15 this is not vailed because const can't
 be redeclair value is alredy agsin
*/
email_id = "edith@gmail.com"
pwd="abcd1234"
let type_ac;
// this console.log shows only id in simple way
console.log(id) 

/* when we declaire number of varibles we need to 
write console.log continue for every varible but
we can display the values of all varible in a single
line of code by using [square brackets]*/

console.table([id, email_id, pwd, city, type_ac])

/*in previous we use var but now we preffer let insted 
of var because of scope problem but presently var is used
in previous programms now we use let to declair varible 
var can b access throughout rogramme means it has global scope but let have local scope means the life of let var is within function where it is declair */