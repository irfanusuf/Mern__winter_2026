

const mongoose = require("mongoose")



export const User = mongoose.model("User", {

    username: { type: String },
    email: { type: String, require: true },
    password: { type: String, require: true },




})


