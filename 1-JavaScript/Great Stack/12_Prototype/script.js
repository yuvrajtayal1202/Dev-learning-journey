


function  Person(fname, lname){
    this.firstName = fname,
    this.lastName = lname
}

Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName;
};

const person1 = new Person("Elon", "Musk");
const person2 = new Person("Bill", "Gates");

// console.log(person1.getFullName());



function Car(){
    this.name = "Maruti"
}
Car.prototype.model = 1997;

const car1 = new Car();
Car.prototype = {model: 52}

const car2 = new Car()
console.log(car1.model);
console.log(car2.model);
