import axios from "axios"

// user registration
export const register = async (firstName, lastName, username, password) => {
    const response = await axios.post("http://localhost:5002/user/register", {
        firstName,
        lastName,
        username,
        password
    })
    return response
    
}
// user login
export const login = async (username, password) => {
    const response = await axios.post("http://localhost:5002/user/login", {
        username,
        password
    })
    return response
}