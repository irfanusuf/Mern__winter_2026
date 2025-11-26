const express = require("express")   // importing express library
const connectDb = require("./config/connectDB")  // import 
const { registerHandler, loginhandler, fetchUserhandler } = require("./controllers/userController")
const bodyParser = require("body-parser")
const cors = require("cors")
const isAuth = require("./middlewares/IsAuthorised")
const { createPost, likePost, commentOnPost } = require("./controllers/postControllers")
const multMid = require("./middlewares/multer")



const app = express()
const port  = 4000

connectDb()

// middle ware 
app.use(bodyParser.json())
app.use(cors())   // ready made cors policy used in middleware


// express is having manual routing ........

app.get("/" , (req,res)=>{res.send("hello from the server ")  })
app.post("/user/register" , registerHandler )
app.post("/user/login" , loginhandler )
app.get("/user/verify/:token" ,  isAuth,   fetchUserhandler)
app.get("/user/bio" , isAuth , ()=>{})



app.post("/post/create" ,isAuth, multMid  , createPost )
app.get("/post/like" , isAuth , likePost)      // enhance the logic in which postid is added to the likesGiven Arr of User 
app.post("/post/comment" , isAuth , commentOnPost)  // enhance the logic in which postid and cooment id  is added to the commentsGiven Arr of User 

// report the comment
// edit the comment 
// report the post 
// report the user // send the reason with reportText // send mail to user 
// user follow 
// user unfollow
// user update 
// bio update
// profile pic upload 
// story upload 
// multiple story upload 
// reply on someones comment   // and save that in user comments Given Arr 







app.listen(port  , ()=>{console.log("server listening on port 4000")} )