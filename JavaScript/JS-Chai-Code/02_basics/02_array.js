const heroes = ['thor', "iron", "spider"]
const newHeroes = ["bat", "jo"]

// heroes.push(newHeroes)

// const all = heroes.concat(newHeroes)
// console.log(all);


// const all_new_heroes = [...heroes, ...newHeroes] // spread function
// console.log(all_new_heroes);

const another_array = [ 1, 2, 3, [4, [5, 7]], 8, [ 6]]
console.log(another_array.flat(Infinity))