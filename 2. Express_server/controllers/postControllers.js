const { uploadToCloudinary } = require("../config/cloudinary")
const {Post} = require("../models/post")




const createPost = async (req,res) => {

    try {
        const {postCaption} = req.body
        const file = req.file.path    // problem hai because multer ko config kiye bager nahi chalehga 

        let {userId} = req.user

        const postPicUrl = await uploadToCloudinary(file)

    
        const newPost =  await new Post ({userId ,  postCaption ,   postPicUrl})    // post will be created in context 


        await  newPost.save()     // save will execute the query on mongo server

        //const newpost = await Post.create({postCaption})    // directly executes on mongo  serrver 

        return res.status(201).json({message : "Post created Succesfully !"})
   

    } catch (error) {
        console.log(error)
        return res.status(500).json({message : "Internal server Error !"})
    }

}



module.exports = {createPost}