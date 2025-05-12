let ages: number[] = [100, 1101]
ages.push(100)

type Person = {
    name: string
    age: number
    isLoggedIn: boolean
}

// const persons : Person[]= []
const persons : Array<Person>= []

const person1 :Person = {
    name: "Yuvraj",
    age: 18,
    isLoggedIn: true,
}

const person2 :Person = {
    name: "raju",
    age: 20,
    isLoggedIn: false
}

persons.push(person1)
persons.push(person2)
console.log(persons)