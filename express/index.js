


const express = require ("express")    // impoorrting exprerss from node modules


const app = express()

const port = 4000


app.get("/" , (req, res)=>{res.send("hello from the server .. we hope you are fine!")})

app.get("/register" , (req,res)=>{res.send("register function is not working , kindlt try again later ")})

app.get("/login" , (req,res)=>{res.send("login will be working Soon ! , Developers are working hard")})

app.get("/forgot-password" , (req,res)=>{res.json({success : false , message : "request Failed !"})})



app.listen(port , ()=>{console.log("express application listening on port 4000")})