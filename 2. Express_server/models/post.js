const mongoose = require("mongoose");




const schema = mongoose.Schema({

    postPicUrl: { type: String },
    postCaption: { type: String },
    likes: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" } }],
    comments: [{
        comment: {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            text: {type : String},
            isReported: { type: Boolean, default: false },
            isEdited: { type: Boolean, default: false }
        }
    }],
    shareCount: { type: Number, default: 0 },
},
{
    timestmaps: true
})



exports.Post = mongoose.Model("Post", schema)

