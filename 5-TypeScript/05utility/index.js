"use strict";
const users = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
];
function updateUser(id, updates) {
    const currentUser = users.find(user => user.id === id);
    if (currentUser) {
        Object.assign(currentUser, updates);
    }
}
// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });
console.log(users);
