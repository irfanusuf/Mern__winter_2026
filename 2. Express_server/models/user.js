const mongoose = require("mongoose")   // new tariqa es6 





// es 6 // export 
 const User =  mongoose.model("User", {

    username: { type: String },
    email: { type: String, require: true },
    password: { type: String, require: true },


})


module.exports = {User}


