require("dotenv").config()
var express = require("express")

var connectToDatabase = require("./dataBase/db")

var app = express()

var PORT = process.env.PORT 

app.listen(PORT,()=>{
    console.log("The server is running");
})

// connect to the data base

connectToDatabase()

