const Name = "Yuvaraj"
const RepoCount = 50;
console.log(Name.length);

// method 1 to add -
 console.log(Name + RepoCount); // Not prefered

// 2
console.log(`Hello my name is ${Name} and my repoCount ${RepoCount}`)


let lastName = " Tayal"
let fullName = Name.concat(lastName) 
console.log(fullName)


/*
let str1 = Name.charAt(2)
console.log(str1)


let str2 = Name.charCodeAt(4)
console.log(str2)
*/


console.log(Name.indexOf("a"))
console.log(Name.lastIndexOf("a"));

let Name2 = "Yuvraj Tayal"
console.log(Name.localeCompare(Name2))

console.log(Name.match("uv"));

console.log(Name2.replace("Yuvraj", "Harhsit"));

console.log(Name.search("a"));

console.log(Name.slice(0,3));
console.log(Name.slice(-6,3));

let splitName = Name.split("") // converts into array
// console.log(splitName);

console.log(Name.substring(0,4));

// console.log(Name.substr(2));

let text = "Hello World!";
// let result = text.toLowerCase();
let result = text.toUpperCase();
console.log(result);














