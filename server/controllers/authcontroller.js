const User=require("../models/User")

const register=async(req,res)=>{

const {name,email,password}=req.body

const user=new User({

name,
email,
password

})

await user.save()

res.json({

message:"User Registered"

})

}

const login=async(req,res)=>{

const {email,password}=req.body

const user=await User.findOne({

email,
password

})

if(user){

res.json({

message:"Login Success"

})

}

else{

res.json({

message:"Invalid User"

})

}

}

module.exports={

register,
login

}