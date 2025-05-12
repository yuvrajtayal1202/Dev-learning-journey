type  pizzaType = {
    id: number,
    name: string,
    price: number
}

type orderType = {
    pizza: string,
     status: "ordered" | "completed",
     id: number 
}
const menu : pizzaType[] = [
    { id: 1,name: "Margherita", price: 6 },
];
 

var cashInRegister = 100;
let nextOrderID = 1

let orderQueue: orderType[] = []

function addNewPizza(pizzaObj: pizzaType) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName : string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if(!selectedPizza){
        console.error(`${selectedPizza} does not exists`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder : orderType = { pizza: selectedPizza.name, status: "ordered", id: nextOrderID++ }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) {
    const completedOrder = orderQueue.find(pizzaObj => pizzaObj.id === orderId)
    if (completedOrder) {
        completedOrder.status = "completed"
    }else{
        console.error(`${orderId} not foun din orderQueue`)
    }
    return completedOrder
    
}


function getPizzaDetails(identifier: string | number){
    if(typeof identifier === "number"){
        const currentPizza = menu.find(menuObj => menuObj.id == identifier)
    }
    else if(typeof identifier === "string"){
        const currentPizza = menu.find(menuObj => menuObj.name.toLowerCase() == identifier.toLowerCase())
    }
    else{
        console.log("The paramenter `identifier` must be a `string` or the `number`")
    }
}



addNewPizza({id: 1, name: "Paneer", price: 12 })
addNewPizza({id: 2, name: "Mushroom", price: 12 })
addNewPizza({id: 3, name: "Onion", price: 12 })

placeOrder("Paneer")
placeOrder("Margherita")

completeOrder(2)

console.log("Menu", menu)
console.log("cashInRegister", cashInRegister)
console.log("orderQueue", orderQueue)   