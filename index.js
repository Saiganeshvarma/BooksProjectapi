require("dotenv").config()
var express = require("express")
var cors = require("cors")

var connectToDatabase = require("./dataBase/db")

var bookRoutes = require("./Routes/book-routes") 
var userRoutes = require("./Routes/user-routes")

var app = express()

app.use(express.json())
app.use(cors())

app.use("/books/api",bookRoutes)

app.use("/users/api",userRoutes)





var PORT = process.env.PORT 

app.listen(PORT,()=>{
    console.log("The server is running");
})

// connect to the data base

connectToDatabase()

