const accountId = 144553  // cont accountId = 12334; ....-> we can use ; also but if we dont use it no need to worry
let accountEmail = "pawan@gmail.com"
var accountPassword = "12345678"
accountCity = "mumbai" // we can store data without using variable
let accountState; // store undefined value


/* prefer not to use "var" 
because of issue in block scope and functional scope
*/


//accountId = 1234   not allowed

accountEmail ="djdh@gmail.com"
accountPassword = "123445"
accountCity = "jaipur"

console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])