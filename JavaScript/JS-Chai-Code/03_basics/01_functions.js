// function addTwo(num1, num2){
//     let result = num1 + num2
//     return result
// }
// // console.log(addTwo(2,2))

// function loginuser(userName){
//     if(userName == undefined){
//         console.log("Please etnter a message")
//         return
//     }
//     return `${userName} just logged in`
// }
// console.log(loginuser())

// function cartPrice(...num1) {
//   return num1;
// }

// console.log(cartPrice(200, 300, 500));

const user = {
    username: "yuvraj",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
