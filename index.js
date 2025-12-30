require("dotenv").config()
var express = require("express")
var cors = require("cors")

var connectToDatabase = require("./dataBase/db")

var bookRoutes = require("./Routes/book-routes") 
var userRoutes = require("./Routes/user-routes")
var homeRoutes = require("./Routes/home-routes")
var imageRoutes = require("./Routes/image-routes")


var app = express()

app.use(express.json())
app.use(cors())

app.use("/books/api",bookRoutes)

app.use("/users/api",userRoutes)

app.use("/users/api",homeRoutes)

app.use("/image",imageRoutes)







var PORT = process.env.PORT 

app.listen(PORT,()=>{
    console.log("The server is running");
})

// connect to the data base

connectToDatabase()

