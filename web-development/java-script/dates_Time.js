  let myDate = new Date()
//   console.log(myDate);
//   console.log(myDate.toString());
//   console.log(myDate.toLocaleString());
//   console.log(myDate.toDateString());
//   console.log(myDate.toISOString());
//   console.log(myDate.toJSON());
//   console.log(myDate.toLocaleTimeString());
//   console.log(myDate.toTimeString());
//   console.log(myDate.toUTCString());
//   console.log(myDate.getTimezoneOffset());
//   console.log(typeof myDate);


  let myCreatedDate = new Date(2023, 0, 23)     // months start with 0
//   console.log(myCreatedDate.toDateString());

  let newCreatedDate = new Date("2023-01-14")   // months start with 1
//   console.log(newCreatedDate.toLocaleString());




let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// ` ${newDate.getDay()} and the time is ........` => to print complex time by string manupulation

newDate.toLocaleString('default',{
    weekday: "long",
})