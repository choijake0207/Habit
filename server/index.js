const express = require("express")
const app = express()
const db = require("./models")



db.sequelize.sync().then(() => {
    app.listen(5002, () => {
        console.log("app listening on port 5002...")
    })
})

