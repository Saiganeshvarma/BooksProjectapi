var express = require("express")
const {getAllBooks,createNewBook,getSingleBook, updateNewBook, deleteBook}= require("../controllers/book-controller")
const authMiddleware = require("../middleware/auth-middleware")

var router = express.Router()

router.get("/allBooks",getAllBooks)

router.get("/singleBook/:id",getSingleBook)

router.post("/add",createNewBook)

router.put("/update/:id",updateNewBook)
router.delete("/delete/:id",deleteBook)





module.exports = router