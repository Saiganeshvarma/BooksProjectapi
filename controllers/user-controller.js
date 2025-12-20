var user = require("../model/user")

var byCrpt = require("bcryptjs")


// register controller


var registerUser = async(req,res)=>{
    try{
        var {username,email,password,role} = req.body 
        var existUser = await user.findOne({$or : [{username,email}]})
        if(existUser){
            res.status(200).json({message : "user already exists"})
        }

        var salt =  await byCrpt.genSalt(10)
        var hashedPassword = await byCrpt.hash(password,salt)

        // create the user

        var newUser = await user.create({
            username,
            email,
            password : hashedPassword,
            role 
        })
        res.status(201).json({message : "user created sucessfully"})




    }catch(error){
        console.log("error",error);
        res.status(500).json({message : "error occured"})
    }



}


module.exports = {
    registerUser
}
