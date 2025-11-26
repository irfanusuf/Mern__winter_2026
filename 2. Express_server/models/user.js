const mongoose = require("mongoose")   // new tariqa es6 


const schema = mongoose.Schema({

    username: { type: String },

    email: { type: String, require: true },

    password: { type: String, require: true },

    posts: [{ postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" } }],
    followers: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" } }],    // array hai userIds ka 
    following: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" } }],     //  array hai userIds ka
    

    profilePic: { type: String },

    bio: { type: String },

    stories: [
        {
            storyUrl: { type: String, require: true },
            timeCreated: { type: Date, default: Date.now },
            expire: { type: Date, default: () => new Date(Date.now() + 86400000) }    // after 24 hours 
        }
    ],



    likesGiven: [{ postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" } }],

    comments: [{
        postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
        commentId: { type: mongoose.Schema.Types.ObjectId }
    }],

    
    isReported: {
        reasonResult: { type: Boolean, default: false },
        reason: [{ reportText: String }],
        banned :{type : Boolean , default :false}
    }


},
    {
        timestamps: true
    })


//old type  export 
const User = mongoose.model("User", schema)

module.exports = { User }


