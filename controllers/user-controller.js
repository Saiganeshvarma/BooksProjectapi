var user = require("../model/user")
var byCrpt = require("bcryptjs")
var jwt = require("jsonwebtoken")

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

//login controller

var loginUser = async(req,res)=>{
    try{
        var {username,password} = req.body 
        var checkUser = await user.findOne({username})
        if(!checkUser){
            return res.status(200).json({message : "invalid user credentails"})
        }
        var comparePassword = await byCrpt.compare(password,checkUser.password)
        if(!comparePassword){
            return res.status(200).json({message : "invalid credentials"})
        }
        var token = jwt.sign({
            userid : checkUser._id,
            username : checkUser.username,
            role : checkUser.role 

        },process.env.JWT_TOKEN,{expiresIn : "1d"})

        res.status(200).json({message : "login sucessfull",myToken : token})



    }catch(error){
        console.log("error",error);
    }
}



module.exports = {
    registerUser,loginUser
}
