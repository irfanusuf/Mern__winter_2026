

const express = require("express")
const path = require("path")


const { registerUser, userLogin } = require("./controllers/userController")
const { connectDb } = require("./config/connectDb")



const app = express()
const port = 4001

connectDb()

// middlewares
app.use(express.static(path.join(__dirname , "public")))    // giving the location of  the static files to the server
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/" , (request,response)=>{response.sendFile(path.join(__dirname , "public" , "index.html"))})
app.get("/user/register" , (req,res) => {res.sendFile(path.join (__dirname , "public" , "register.html"))})
app.get("/user/login" , (req,res)=>{res.sendFile(path.join(__dirname , "public" , "login.html"))} )



app.post("/user/register" , registerUser)
app.post("/user/login" , userLogin)









app.listen(port , ()=>{console.log(`server listening on port ${port}`)})