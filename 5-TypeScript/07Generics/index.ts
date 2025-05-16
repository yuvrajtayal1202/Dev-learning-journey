const gameScore = [12,23,43,23,43,77]
const favouriteThings = ["Shoes" , "Umbrelaa"]
const voters = [{id: 1, name: "yu"} , {id: 2, name: "jo"}]

function getLastitems<PlaceHolderTypes>(array: PlaceHolderTypes[]): PlaceHolderTypes | undefined{
    return array[array.length -1]
}

console.log(getLastitems(gameScore))
console.log(getLastitems(favouriteThings))
console.log(getLastitems(voters))   