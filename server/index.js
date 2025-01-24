const express = require("express")
const app = express()
const db = require("./models")
const cors = require("cors")



app.use(express.json())
app.use(cors())

const userRouter = require("./routes/UserRouter")
app.use("/user", userRouter)

db.sequelize.sync().then(() => {
    app.listen(5002, () => {
        console.log("app listening on port 5002...")
    })
})

