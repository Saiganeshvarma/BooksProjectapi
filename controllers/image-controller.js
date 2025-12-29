
var {uploadToCloudainary} = require("../helper/cloudinary_heper")

var image = require("../model/image")

var uploadImage = async(req,res)=>{
    try{
        if(!req.file){
            return res.status(200).json({message : "no image added"})
        }

        var {url,publicId} = await uploadToCloudainary(req.file.path)

        var uploadedImage = await image.create({
            url,
            publicId
        })
        res.status(201).json({message : "image added sucessfully"})





    }catch(error){
        console.log("error",error);
    }
}


module.exports = {
    uploadImage
}
