require("dotenv").config()
var express = require("express")

var connectToDatabase = require("./dataBase/db")

var bookRoutes = require("./Routes/book-routes") 
var app = express()

app.use(express.json())

app.use("/books/api",bookRoutes)

var PORT = process.env.PORT 

app.listen(PORT,()=>{
    console.log("The server is running");
})

// connect to the data base

connectToDatabase()

