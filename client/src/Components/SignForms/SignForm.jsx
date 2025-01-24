import React, { useState } from 'react'
import { NavLink , useNavigate} from 'react-router'
import { register, login } from '../../API/User'

export default function SignForm({type}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            await register(firstName, lastName, username, password)
            setFirstName("")
            setLastName("")
            setUsername("")
            setPassword("")
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    const handleLogin = async(e) => {
        e.preventDefault()
        try {
            await login(username, password)
            setUsername("")
            setPassword("")
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }




  return (
    <div className="sign-form-wrap">
        {type === "login" ? (
            <form class="sign-form login-form" onSubmit={handleLogin}>
                <label>Username</label>
                <input 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    name="username"
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                />
                <button type="submit">
                    Login
                </button>
                <p class="sign-form-footer-note">Don't have an account? Click <NavLink to="/register">here</NavLink> to sign up</p>
            </form>
        ) : (
            <form class="sign-form register-form" onSubmit={handleRegister}>
                <label>First Name</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    name="firstName"
                />
                <label>Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    name="lastName"
                />
                <label>Create a Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    name="username"
                />
                <label>Create a Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                />
                <button type="submit">Create Account</button>
                <p class="sign-form-footer-note">Already have an account? Click <NavLink to="/login">here</NavLink> to login</p>
            </form>
        )}
    </div>
  )
}
