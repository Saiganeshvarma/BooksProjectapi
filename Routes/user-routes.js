var express = require("express")
const { registerUser } = require("../controllers/user-controller")

var router = express.Router()

// register route

router.post("/register",registerUser)

// login route

module.exports = router