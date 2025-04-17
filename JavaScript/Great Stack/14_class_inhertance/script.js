// Java Script Class

class Person{
    constructor(Name){
    this.name = Name;
    }
    greet(){
        console.log("Hello " + this.name);
        
    }
}

class Student extends Person{
 constructor(name)
 {
    super(name);
 }
}

const student1 = new Student("Peter")

student1.greet()