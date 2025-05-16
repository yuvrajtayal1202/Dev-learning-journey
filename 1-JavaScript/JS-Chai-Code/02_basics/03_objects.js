// singleton constructor
//  Object.create 

// obejct literals

const mySym = Symbol("Key1")

const JSuser = {
    Name: "Hitesh",
    "Full Name": "Yuvraj Tayal",
    Age: 18,
    location: "Rishikesh",
    email: "yuvrajtayal",
    [mySym]: "Key1"
}
// console.log(JSuser.Name);
// console.log(JSuser["Full Name"]);

JSuser.email = "yuvrajtayal1202"
console.log(JSuser)
// Object.freeze(JSuser)
// console.log(JSuser)

JSuser.greeting = function(){
    console.log("Hello JS user")
}
JSuser.greetingTwo = function(){
    console.log(`Hello JS user, ${JSuser.Name}`)
}
// console.log(JSuser.greeting())
JSuser.greeting()
JSuser.greetingTwo()