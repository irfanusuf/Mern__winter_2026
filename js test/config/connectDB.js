const mongoose = require("mongoose")



const connectDb = async () => {

    try {

        const connectionString = "dumyyyyy"

        await mongoose.connect(connectionString)

    } catch (error) {
        console.log(error)
    }

}



module.exports = connectDb
