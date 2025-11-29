const User = require("../models/userModel")




async function registerUser(req, res) {

    const {username , email , password} = req.body  // request object 

    if(!username || !email || !password ){
        return res.json({message : "All credential are required !"})
    }

   const newUser =  await User.create({username , email , password})   /// db may save keryga 

   if(newUser){
    res.json({message : "User created Succesfully!"})
   }
}




async function userLogin(req, res) {

    const {email , password} = req.body

    if(email === ""|| password === ""){
        return res.json({message :"email and password both are required !"})
    }

    const existingUser = await User.findOne({email})

    if(!existingUser){
        return res.json({message : "User with this email not found !"})
    }

    if(password === existingUser.password) {
         return res.json({message : "Logged in succesfully!"})
    }else{
        return res.json({message : "Password incorrect"})
    }


}



module.exports = { registerUser, userLogin }