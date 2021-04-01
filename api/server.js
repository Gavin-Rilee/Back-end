const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

const authRouter = require("./auth/auth-router")
const usersRouter = require("./users/router")
const classesRouter = require("./classes/router")
const user_classesRouter = require("./user_classes/router")

const restricted = require("./auth/auth-restricted")

server.use("/api/auth", authRouter)
server.use("/api/users", /*restricted,*/ usersRouter)
server.use("/api/classes", /*restricted,*/ classesRouter)
server.use("/api/user_classes", /*restricted,*/ user_classesRouter)

server.get("/", (req, res) => {
  res.json({ Hello: "Chance, Hans and Gavin" })
})

module.exports = server