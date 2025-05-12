"use strict";
const menu = [
    { name: "Margherita", price: 6 },
];
var cashInRegister = 100;
let nextOrderID = 1;
let orderQueue = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${selectedPizza} does not exists`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = { pizza: selectedPizza.name, status: "ordered", id: nextOrderID++ };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    const completedOrder = orderQueue.find(pizzaObj => pizzaObj.id === orderId);
    if (completedOrder) {
        completedOrder.status = "Completed";
    }
    else {
        console.error(`${orderId} not foun din orderQueue`);
    }
    return completedOrder;
}
addNewPizza({ name: "Paneer", price: 12 });
addNewPizza({ name: "Mushroom", price: 12 });
addNewPizza({ name: "Onion", price: 12 });
placeOrder("Paneer");
placeOrder("Margherita");
completeOrder(2);
console.log("Menu", menu);
console.log("cashInRegister", cashInRegister);
console.log("orderQueue", orderQueue);
