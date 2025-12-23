var jwt = require("jsonwebtoken")

var authMiddleware = (req,res,next)=>{
    var authHeaders = req.headers["authorization"]
    var token = authHeaders &&  authHeaders.split(" ")[1]
    if(!token){
        return res.status(200).json({message : "cannot acces the route"})
    }
    try{
        var decodedToken = jwt.verify(token,process.env.JWT_TOKEN)
        console.log(decodedToken);
        next()

    }catch(error){
        res.status(200).json({message : "no account"})
        console.log("error",error);
    }

}

module.exports = authMiddleware