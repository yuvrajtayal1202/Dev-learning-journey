type  pizzaType = {
    name: string,
    price: number
}

type orderType = {
    pizza: string,
     status: string,
     id: number 
}
const menu : pizzaType[] = [
    { name: "Margherita", price: 6 },
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
    const newOrder = { pizza: selectedPizza.name, status: "ordered", id: nextOrderID++ }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) {
    const completedOrder = orderQueue.find(pizzaObj => pizzaObj.id === orderId)
    if (completedOrder) {
        completedOrder.status = "Completed"
    }
    return completedOrder
}

addNewPizza({ name: "Paneer", price: 12 })
addNewPizza({ name: "Mushroom", price: 12 })
addNewPizza({ name: "Onion", price: 12 })

placeOrder("Paneer")
placeOrder("Margherita")

completeOrder(2)

console.log("Menu", menu)
console.log("cashInRegister", cashInRegister)
console.log("orderQueue", orderQueue)   