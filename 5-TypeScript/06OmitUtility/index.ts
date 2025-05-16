type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

// type updatedUser = {
//     id?: number
//     username?: string
//     role?: "member" | "contributor" | "admin"
// }

type updatedUser = Partial<User>

let nextUserID = 1

const users: User[] = [
    { id: nextUserID++, username: "john_doe", role: "member" },
    { id: nextUserID++, username: "jane_smith", role: "contributor" },
];

function updateUser(id: number, updates: updatedUser) {
    const currentUser = users.find(user => user.id === id)
    if (currentUser) {
        Object.assign(currentUser, updates);
    }

}



function addNewUsers(user: Omit<User, "id">): User {
    const newUser: User = {
        id: nextUserID++,
        ...user
    }
    users.push(newUser)
    return newUser
}

addNewUsers({ username: "joe_schome", role: "member" })

console.log(users)