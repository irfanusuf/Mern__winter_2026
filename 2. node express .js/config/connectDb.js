const { default: mongoose } = require("mongoose");





async function connectDb() {


    const url = "mongodb+srv://irfanusuf33:dotnetwebapi@dotnetwebapi.m48gol1.mongodb.net/?retryWrites=true&w=majority&appName=DotnetWebAPI"
    
    await  mongoose.connect(url)

    console.log("DB Connected" )


}


module.exports = {connectDb}