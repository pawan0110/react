// *** singleton 
// object.create => creation of object by constructor



// object literals

const mysym = Symbol("key1")


const jsuser = {
    name : "pawan",  // name is taken as string in js
    "full name": "pawan kumar",
    [mysym]: "mykey1", // to access symbol in object always use [] , else symbol is taken as string
    age: 18,
    location: "bihar",
    email: "pawan@gmail.com",
    isLoggedIn: false,
    latsLoninDay: ["monday", "saturday"]

}

// console.log(jsuser.email); // one way of accessing obj ..not good
// console.log(jsuser["email"]); //another way ...good way
// console.log(jsuser["full name"]); // can't acces through way one
// console.log(jsuser[mysym]);

jsuser.email = "kumar2gmail.com"
//object.freeze(jsuser)
jsuser.email = "kumar@google.com"
//console.log(jsuser);

jsuser.greeting = function(){
    console.log("heello js user");
}
jsuser.greetingtwo = function() {
    console.log(`hello js user, ${this.name}`)
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());    //undefined