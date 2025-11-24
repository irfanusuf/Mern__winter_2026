const mongoose = require("mongoose");

const schema = mongoose.Schema({

    postPicUrl: { type: String },

    postCaption: { type: String },

    userId : {type : mongoose.Schema.Types.ObjectId , ref : "User" , require : true} , 

    likes: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" } }],

    comments: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            text: { type: String },
            isReported: { type: Boolean, default: false },
            isEdited: { type: Boolean, default: false },
            replies: [{
                userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
                text: { type: String },
                isReported: { type: Boolean, default: false },
                isEdited: { type: Boolean, default: false },
            }]
        }
    ],



    shareCount: { type: Number, default: 0 },
},
    {
        timestmaps: true
    })

    const Post = mongoose.Model("Post", schema)

    module.exports = {Post}



