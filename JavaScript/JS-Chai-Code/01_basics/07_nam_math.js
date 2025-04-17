const score = 440
// console.log(score);

const num = new Number(440)
// console.log(num);

// console.log(num.toString().length) // to convert into string

// console.log(num.toFixed(1)); //After point digits

 const anNumber = 1.243333698
// console.log(anNumber.toPrecision(4))

const hundreds = 1000000000
// console.log(hundreds.toLocaleString()) // to add commas
// console.log(hundreds.toLocaleString('en-IN')) // to add commas
   


// +++++++++++++++++++ Matha +++++++++++++++++++++

console.log(Math)
// console.log(Math.abs(-4)) // converts positive

// console.log(Math.round(10.23333)) // rounds autoaticly
// console.log(Math.ceil(10.23333)) // rounds Increasingly
// console.log(Math.floor(10.23333)) // rounds Decreasing

console.log(Math.random())
console.log(Math.random()*10 + 1)
console.log(Math.floor(Math.random()*10 + 1))

const max = 6
const min = 1
console.log(Math.floor(Math.random()*(max - min +1 ))+ min);

