"use strict";
let nextUserID = 1;
const users = [
    { id: nextUserID++, username: "john_doe", role: "member" },
    { id: nextUserID++, username: "jane_smith", role: "contributor" },
];
function updateUser(id, updates) {
    const currentUser = users.find(user => user.id === id);
    if (currentUser) {
        Object.assign(currentUser, updates);
    }
}
function addNewUsers(user) {
    const newUser = Object.assign({ id: nextUserID++ }, user);
    users.push(newUser);
    return newUser;
}
addNewUsers({ username: "joe_schome", role: "member" });
console.log(users);
