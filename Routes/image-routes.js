var express = require("express")
const { uploadImage, getAllImages } = require("../controllers/image-controller")

var upload = require("../middleware/multer.js")

var router = express.Router()

router.post("/uploads",upload.single("image"), uploadImage)

router.get("/images",getAllImages)


module.exports = router