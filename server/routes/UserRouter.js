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




module.exports = router