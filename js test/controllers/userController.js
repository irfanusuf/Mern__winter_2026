const  {User}  = require("../models/user")




const registerHandler = async (req, res) => {

    try {

        const { email, username, password } = req.body

        if (email === "" || password === "" || username === "") {

            return res.status(400).json({ message: "All user details are required !" })
        }

        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(400).json({message : "user already exists"})
        }

        const newUser = await User.create({ email, username, password })


        if (newUser) {
            return res.status(201).json({ messsage: "New User created Succesfully!" })
        } else {
            return res.json({ messsage: "Some thing went Wrong !" })
        }


    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server  Error" })
    }
}



module.exports = { registerHandler }