const date = new Date()

// console.log(date.getDate()) // tarik
// console.log(date.getMonth())
// console.log(date.getFullYear())
// console.log(date.getDay())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())

// console.log(date.getTime())

// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toTimeString());
console.log(date.toLocaleString());

// let newDate = new Date(2009, 1, 12, 10, 30, 41)
let newDate = new Date("02-12-2009")
// console.log(newDate.toLocaleString());

// Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date

// let mytimeStamp = Date.now()
// console.log(mytimeStamp);

// console.log(date.getTime());

// console.log(Math.floor(Date.now()/1000));

const d = new Date();
let text = d.toLocaleString("en-IN", {
    dateStyle: "short"
});


