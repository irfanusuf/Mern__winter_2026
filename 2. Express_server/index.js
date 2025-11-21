const express = require("express")   // importing express library
const connectDb = require("./config/connectDB")  // import 
const { registerHandler, loginhandler, fetchUserhandler } = require("./controllers/userController")
const bodyParser = require("body-parser")
const cors = require("cors")
const isAuth = require("./middlewares/IsAuthorised")



const app = express()

const port  = 4000

connectDb()

// middle ware 
app.use(bodyParser.json())
app.use(cors())   // ready made cors policy used in middleware


app.get("/" , (req,res)=>{res.send("hello from the server ")  })


app.post("/user/register" , registerHandler )
app.post("/user/login" , loginhandler )


app.get("/user/verify/:token" ,  isAuth,   fetchUserhandler)


app.get("/user/bio" , isAuth , ()=>{})




app.listen(port  , ()=>{console.log("server listening on port 4000")} )