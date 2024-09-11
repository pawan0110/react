// stack => premitive
// heap => non premitive

let myname = "pawan"
let anothername = myname       // in stack copy of data is shared , chnages make in 
anothername = "kumar"          // the copied data doesnt affect original data
console.log(anothername); //kumar 
console.log(myname);  //pawan







let userone = {
    email: "user@goggle.com",
    upi: "user@ybl"

}
let usertwo = userone
usertwo.email = "kumar@gmail.com"
console.log(userone.email); //"kumar@gmail.com"        
console.log(usertwo.email); // "kumar@gmail.com"
 
// in heap reference of data is shared ... changes make in the referenced data
// will also change the original data 