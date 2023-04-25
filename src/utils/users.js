const users = []

const addUser = ({id,username, room}) =>{
    // Clean the data 
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate Data
    if(!username || !room) {
        return {
            error: 'Username and room  are required!'
        }
    }

    //  Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate Username
    if(existingUser){
        return {
            error: 'User already exist!'
        }
    }

    //  Store User

    const user = {id, username, room}
    users.push(user)
    return {user}
}
// Delete a User
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}
// Get a User
const getUser = (id) => {
    return users.find((user) => user.id === id)
}
// Get a users in the Room!
 const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
 }

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}