let myName: string = "Yuvraj"
let wheels: number = 4
let user: boolean = false


type Address = {
    street: string,
    State: string,
    Country: string
}

type Person = {
    name: string
    age: number
    isLoggedIn: boolean
    address?: Address
}

const person1: Person = {
    name: "Yuvraj",
    age: 18,
    isLoggedIn: true,
    address: {
        street: "123",
        State: "Delhi",
        Country: "India"
    }
}

const person2: Person = {
    name: "raju",
    age: 20,
    isLoggedIn: false,
    // address: {
    //     street: "123",
    //     State: "Delhi",
    //     Country: "India"
    // }
}

function displayInfo(person : Person){
    console.log(`${person.name} lives in ${person.address?.street }`)
}

displayInfo(person2)