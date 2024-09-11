const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNUmber = 1123.8976
// console.log(otherNUmber.toPrecision(5));
// console.log(otherNUmber.toPrecision(3));
// console.log(otherNUmber.toPrecision(4));


const hundreds = 1000000
// console.log(hundreds.toLocaleString());         // american standard
// console.log(hundreds.toLocaleString('en-IN'));   // indian standard





// +++++++++++++++++++++++++ MAths ++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,5,1));
// console.log(Math.max(1,22,3,45,6));

console.log(Math.random());       // give value between 0 and 1....
console.log((Math.random()*10 ) + 1);


const min = 10
const max = 20
console.log(Math.floor(Math.random() *(max - min +1) + min ));     // important