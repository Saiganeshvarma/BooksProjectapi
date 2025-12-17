var express = require("express")
const {getAllBooks,createNewBook,getSingleBook}= require("../controllers/book-controller")

var router = express.Router()

router.get("/allBooks",getAllBooks)

router.get("/singleBook/:id",getSingleBook)

router.post("/add",createNewBook)





module.exports = router