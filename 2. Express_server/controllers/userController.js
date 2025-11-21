const e = require("express")
const { User } = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv').config()




const registerHandler = async (req, res) => {

    try {

        const { email, username, password } = req.body

        if (email === "" || password === "" || username === "") {

            return res.status(400).json({ message: "All user details are required !" })
        }

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(400).json({ message: "user already exists" })
        }

        const encryptPass = await bcrypt.hash(password, 10)

        const newUser = await User.create({ email, username, password: encryptPass })


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


const loginhandler = async (req, res) => {

    try {

        const { email, password } = req.body

        if (email === "" || password === "") {
            return res.status(400).json({ message: "Email and pass both are required !" })
        }

        const existingUser = await User.findOne({ email })

        if (existingUser === null) {
            return res.status(404).json({ message: "No User Found !" })
        }
        const verifyPass = await bcrypt.compare(password, existingUser.password)

        const payload = {
            userId: existingUser._id,
            username: existingUser.username
        }


        if (verifyPass) {
            const token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: 24 * 60 * 60 * 1000
            })
            return res.json({ message: "Logged in succesfully !", token })
        } else {
            return res.status(400).json({ message: "Password incorrect !" })
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server Error" })
    }



}


const fetchUserhandler = async (req, res) => {
    try {


        console.log("request user" , req.user)

        let {userId} = req.user

        let user = await User.findById(userId)    // userId objectID

        if (user !== null) {
            return res.status(200).json({ message: "1 user Found !", payload: user })
        } else {
            return res.status(404).json({ message: "User Not Found !" })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server Error !" })
    }

}


module.exports = { registerHandler, loginhandler, fetchUserhandler }