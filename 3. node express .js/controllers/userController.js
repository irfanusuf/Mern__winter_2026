const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// register controller


async function registerUser(req, res) {

    const { username, email, password } = req.body  // request object 

    if (!username || !email || !password) {
        // view ko error message bhegte hai 
        return res.render("register", { errMessage: "All credential are required !" })
    }
    const existingUser = await User.findOne({ email })   // time consuming step

    if (existingUser) {
        return res.render("register", { errMessage: "Email already Exists !" })
    }

    const encryptedPass = await bcrypt.hash(password, 10)

    // manipulating the model // create user
    const newUser = await User.create({ username, email, password: encryptedPass })   /// db may save keryga 


    // view ko success message bhegte hai 
    if (newUser) {
        res.redirect("login")
    }
}

async function userLogin(req, res) {

    try {

    const { email, password } = req.body
    if (email === "" || password === "") {
        return res.render("login", { errMessage: "Email and password both are required !" })
    }

    const existingUser = await User.findOne({ email })

    if (!existingUser) {
        return res.render("login", { errMessage: "User with this email not found !" })
    }

    if (await bcrypt.compare(password, existingUser.password)) {

        const payload = {
            userId: existingUser._id,
            username: existingUser.username,
            email: existingUser.email
        }

        const secretkey =  "anyrandomStringcanbeSecretKey"

        const token = await jwt.sign(payload, secretkey ,{ expiresIn : 7 * 24 * 60 * 60 * 1000 } )

        res.cookie("authToken" , token , {maxAge :   7 * 24 * 60 * 60 * 1000  })
        

        return res.render("login", { suxsMessage: "Logged in succesfully!" })
    } else {
        return res.render("login", { errMessage: "Password incorrect" })
    }
        
    } catch (error) {
        console.error(error)
    }

}






module.exports = { registerUser, userLogin }