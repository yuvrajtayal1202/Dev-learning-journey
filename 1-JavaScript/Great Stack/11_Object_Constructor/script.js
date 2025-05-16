const person = {
    firstName: "Elon",
    lastName: "Musk",
}

function Person(f, s){
    this.firstName = f,
    this.lastName = s
    this.getFullName = function(){
        return this.firstName + " " + this.lastName 
    }
}

const person1 = new Person("Yuvraj", "Tayal");
const person2 = new Person("Elon", "Musk");

console.log(person2);

person1.age = 52;
console.log(person1);
console.log(person1.getFullName);

person2.greet = function(){
    console.log("Hello, Yuvraj");
    
}

person2.greet()