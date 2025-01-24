const express = require("express")
const router = express.Router()
const {User} = require("../models")
const bcrypt = require("bcrypt")


router.post("/register", async (req, res) => {
    const {firstName, lastName, username, password} = req.body
    const first = firstName.toLowerCase()
    const last = lastName.toLowerCase()
    const handle = username.toLowerCase()
    try {
        const usernameExists = await User.findOne({where: {username: handle}})
        if (usernameExists) {
            return res.status(400).json({error: "Username Already Exists"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            firstName: first,
            lastName: last,
            username: handle,
            password: hashedPassword
        })
        res.json("Succesfully created account")


    } catch (error) {
        res.status(500).json({error: "Failed To Create Accounts"})
    }
})

router.post("/login", async (req, res) => {
    const {username, password} = req.body
    const handle = username.toLowerCase()
    try {
        // check if user exists
        const match = await User.findOne({where: {username: handle}})
        if (!match) {
            return res.status(404).json({error: "User Not Found"})
        }
        // check password
        const passMatch = await bcrypt.compare(password, match.password)
        if (!passMatch) {
            return res.status(401).json({error: "Password Is Incorrect"})
        }
        res.json("Succesfully Logged In")
    } catch (error) {
        res.status(500).json({error: "An Error Occured Logging In"})
    }
})




module.exports = router