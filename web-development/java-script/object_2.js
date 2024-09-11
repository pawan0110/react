//const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "pawan"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularuser = {
    email: "pawan@gmail.com",
    fullname: {
        userfullname: {
            firstname: "pawan",
            lastname: "kumar"
        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//const obj4 = {obj1,obj2} // not a good way to combine object
//const obj4 = Object.assign({},obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2}
//console.log(obj3);


const users = [            // array
    {
        id: 1,
        email: "pawan@"
    },
    {
        id: 1,
        email: "pawan@"
    },
    {
        id: 1,
        email: "pawan@"
    }
]

users[1].email
//console.log(object.keys(tinderuser));

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: " js in hindi",
    Price: "999",
    courseInstructor:"hitesh"
}

//course.courseInstructor

    courseInstructor:"hitesh"
    const {courseInstructor: instructor} = course   //destructor

console.log(courseInstructor);
console.log(instructor);

{
    "name"; "pawan",
    "coursename"; "js in hindi",        // api...object
    "price" ; "free"
}

[
    {},
    {},                // api...ARRAY
    {}
]