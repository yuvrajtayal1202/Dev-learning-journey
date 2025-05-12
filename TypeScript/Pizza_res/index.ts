var cashInRegister = 100;
let nextOrderID = 1
let nextPizzaID: number = 1
let orderQueue: orderType[] = []

type pizzaType = {
    id?: number,
    name: string,
    price: number
}

type orderType = {
    id: number
    pizza: string,
    status: "ordered" | "completed",
}
const menu: pizzaType[] = [
    { id: nextPizzaID++, name: "Margherita", price: 6 }
];



function placeOrder(pizzaName: string): orderType | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${selectedPizza} does not exists`)
        return;
    }
    cashInRegister += selectedPizza.price
    const newOrder: orderType = { pizza: selectedPizza.name, status: "ordered", id: nextOrderID++ }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number): orderType | undefined {
    const completedOrder = orderQueue.find(pizzaObj => pizzaObj.id === orderId)
    if (completedOrder) {
        completedOrder.status = "completed"
    } else {
        console.error(`${orderId} not foun din orderQueue`)
    }
    return completedOrder

}


function getPizzaDetails(identifier: string | number): pizzaType | undefined {
    if (typeof identifier === "number") {
        return menu.find(menuObj => menuObj.id == identifier)
    }
    else if (typeof identifier === "string") {
        return menu.find(menuObj => menuObj.name.toLowerCase() == identifier.toLowerCase())
    }
    else {
        console.log("The paramenter `identifier` must be a `string` or the `number`")
        return undefined
    }
}


function addNewPizza(pizzaObj: Omit<pizzaType, "id">): pizzaType {
    const newPizza: pizzaType = {
        id: nextPizzaID++,
        ...pizzaObj
    }
    menu.push(newPizza)
    return newPizza
}



addNewPizza({ name: "Paneer", price: 12 })
addNewPizza({ name: "Mushroom", price: 12 })
addNewPizza({ name: "Onion", price: 12 })

placeOrder("Paneer")
placeOrder("Margherita")

completeOrder(2)

// console.log("Menu", menu)

function addToArray<T>(array: T[], item: T): T[] {
    array.push(item)
    return array  
}
// example usage:
addToArray(menu, { id: nextPizzaID++, name: "Chicken Bacon Ranch", price: 12 })
// addToArray(orderQueue, { id: nextOrderID++, pizza: menu[2]?.name ?? "", status: "completed" })
addToArray<orderType>(orderQueue, { id: nextOrderID++, pizza: menu[2].name, status: "completed" })
console.log(menu)
console.log(orderQueue)