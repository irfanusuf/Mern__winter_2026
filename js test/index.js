const express = require("express")   // importing express library
const connectDb = require("./config/connectDB")  // import 



const app = express()
const port = 4000

connectDb()



app.get("/" , (req,res)=>{res.send("hello from the server ")  })

app.get("/user/register" , (req,res)=>{ res.send("register not Working !")})




app.listen(port  , ()=>{console.log("server listening on port 4000")} )