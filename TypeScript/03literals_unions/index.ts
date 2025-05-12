let myName: "BOB" = "BOB"
const myName2: "bob" = "bob"



type  UserRole = "member" | "guest" | "admin"
type User = {
    user: string,
    role: UserRole
}

let users: User[] =   [
    {user: "john", role: "member"},
    {user: "jo", role: "guest"},
    {user: "johny", role: "admin"},
]

function fetchUserDetails(username: string){
    const user = users.find(user => user.user == username)
    if(!user){
     throw new Error(`${username} Note Found !!!!`)
    }
    return user
}