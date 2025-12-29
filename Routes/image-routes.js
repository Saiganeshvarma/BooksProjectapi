var express = require("express")
const { uploadImage } = require("../controllers/image-controller")

var router = express.Router()

router.post("/uploads",uploadImage)