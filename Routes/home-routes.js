var express = require("express")
const authMiddleware = require("../middleware/auth-middleware")

var router = express.Router()

router.get("/home",authMiddleware,async(req,res)=>{
    res.status(200).json({message : "welcome to the home page"})
})

module.exports = router