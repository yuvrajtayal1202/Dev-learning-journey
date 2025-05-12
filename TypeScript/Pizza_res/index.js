var menu = [
    { name: "Margherita", price: 6 },
];
var cashInRegister = 100;
var nextOrderID = 1;
var orderQueue = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(selectedPizza, " does not exists"));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = { pizza: selectedPizza.name, status: "ordered", id: nextOrderID++ };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var completedOrder = orderQueue.find(function (pizzaObj) { return pizzaObj.id === orderId; });
    if (completedOrder) {
        completedOrder.status = "Completed";
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
