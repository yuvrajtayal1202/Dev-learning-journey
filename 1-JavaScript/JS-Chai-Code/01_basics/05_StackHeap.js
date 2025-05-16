// Stack - primitive- different refrence Gives copy
let Name = "Yuvraj";

let anName = Name;
anName = "Caligo"


// Heap - Non-Primitive 
let  userOne = {
    email: "yuvraj@gaaogle.com",
    upi: "yuvraj@hdfc"
}

let userTwo = userOne;
userTwo.email = 'user@gmail.com'

console.log(userOne.email)
console.log(userTwo.email)

