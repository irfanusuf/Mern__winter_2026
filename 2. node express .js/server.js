

const express = require("express")
const path = require("path")


const { registerUser, userLogin } = require("./controllers/userController")
const { connectDb } = require("./config/connectDb")

const app = express()
const port = 4001

connectDb()

// by default our view engine is set to html  // but working with html is tedious 
// use hbs for ease

app.set('view engine', 'hbs');


// middlewares
app.use(express.static(path.join(__dirname , "public")))    // giving the location of  the static files to the server
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes   // GET
app.get("/" , (request,response)=>{response.render("index")})
app.get("/user/register" , (req,res) => {res.render("register")})
app.get("/user/login" , (req,res)=>{res.render("login")} )

// app.get("/user/login" , (req,res)=>{res.sendFile(path.join(__dirname , "public" , "login.html"))} )

//routes  // POST
app.post("/user/register" , registerUser)
app.post("/user/login" , userLogin)



app.listen(port , ()=>{console.log(`server listening on port ${port}`)})