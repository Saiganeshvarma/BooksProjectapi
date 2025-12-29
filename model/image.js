var mongoose = require("mongoose")

var imageSchema = new mongoose.Schema({
    url : {
        type : String,
        required : true
    },
    publicId :{
        type : String,
        required : true
    }

})

module.exports = mongoose.model("image",imageSchema)