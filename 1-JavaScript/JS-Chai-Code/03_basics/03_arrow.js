const user = {
    username: "yuvraj",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this)


// ++++++++++ ARROW +++++++++++++++

const dog = () => {
    let username = "Yuvraj"
    console.log(this)
}
dog()

const addTwo = (num1, num2) => (num1 + num2)