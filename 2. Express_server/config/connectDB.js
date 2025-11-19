const mongoose = require("mongoose")



const connectDb = async () => {

    try {
        const connectionString = "mongodb+srv://irfanusuf33:dotnetwebapi@dotnetwebapi.m48gol1.mongodb.net/Trinkle?retryWrites=true&w=majority&appName=DotnetWebAPI"
        // these process are happening on workers threads lefting the main thread vacant and not blocking i/o
        await mongoose.connect(connectionString)   // libuv will transefer this task to microtask quene
        console.log("Db Connected ")  // this process was waiting for above await  
    } catch (error) {
        console.log(error)
    }
}



module.exports = connectDb
