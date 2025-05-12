var myName = "Yuvraj";
var wheels = 4;
var user = false;
var person1 = {
    name: "Yuvraj",
    age: 18,
    isLoggedIn: true,
    address: {
        street: "123",
        State: "Delhi",
        Country: "India"
    }
};
var person2 = {
    name: "raju",
    age: 20,
    isLoggedIn: false,
    // address: {
    //     street: "123",
    //     State: "Delhi",
    //     Country: "India"
    // }
};
function displayInfo(person) {
    console.log("".concat(person.name, " lives in ").concat(person.address ? person.address.street : "none"));
}
displayInfo(person2);
