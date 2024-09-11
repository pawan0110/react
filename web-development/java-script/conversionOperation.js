let score = "33abc"  
// console.log(typeof score);
// console.log(typeof (score));

let valueInNUmber = Number(score);   // N in Number is capital 
// console.log(typeof valueInNUmber);
// console.log(valueInNUmber);
// conversion in number
// "33" => 33
// "33abc" => 33 but type is NAN
// true => 1
// null => 0
// undefined => NAN


let isLoggedIn = true
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

//conversion in number
// 1 => true; 0=> false
//""=> false    .... empty string
//"pawan"=> true


//string
let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof(stringNumber));





                /// ************ operation   ********************


let value = 33
let NegValue = -value;
// console.log(NegValue);
//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2%2);


let str1 = "hello"
let str2 = " pawan"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");               // not a good way to write code , 
// console.log("1" + 2);              // awalys use parenthesis while
// console.log("1" + 2 + 3);         // performing multiple operation
// console.log(1 + 2 + "2");
// console.log(3 + 4 * 5 % 3);   
// console.log(+true);
//console.log(true+);
//console.log(+"");


// study postfix and prefix on mdn....


//  ****************** comparison *****************

console.log(2 > 1);
console.log("2" > 1);
console.log("02" > 1);



//confusing comparison.......
console.log(null > 0);  // false
console.log(null == 0);   //false  // working process is different
console.log(null >= 0); // true

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

//  === strick check ...=> also check datatype ....