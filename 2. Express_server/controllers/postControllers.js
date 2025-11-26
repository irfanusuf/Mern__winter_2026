const { uploadToCloudinary } = require("../config/cloudinary")
const { Post } = require("../models/post")


const createPost = async (req, res) => {

    try {
        const { postCaption } = req.body

        const file = req.file.path    // problem hai because multer ko config kiye bager nahi chalehga 

        let { userId } = req.user

        const postPicUrl = await uploadToCloudinary(file)

        const newPost = await new Post({ userId, postCaption, postPicUrl })    // post will be created in context 

        await newPost.save()     // save will execute the query on mongo server

        //const newpost = await Post.create({postCaption})    // directly executes on mongo  serrver 

        return res.status(201).json({ message: "Post created Succesfully !" })


    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server Error !" })
    }

}


const likePost = async (req, res) => {
    try {
        // const postId = req.query.postId  
        const { postId } = req.query
        const { userId } = req.user

        let post = await Post.findById(postId)

        if (post === null) {

            return res.status(404).json({ message: "Post not Found!" })
        }

        const alreadyLiked = post.likes.includes(userId)

        if (alreadyLiked) {
            // remove Like 
            const findIndex =   post.likes.indexof(userId)    // 13 
            post.likes.splice(findIndex , 1)
        
            return res.json({ message: "already liked the post !" })

        } else {

            post.likes.push(userId)

            await post.save()

            return res.json({ message: "Post Liked Succesfully !" })
        }



    } catch (error) {
        console.log(error)
    }
}


const commentOnPost = async (req, res) => {

 try {

     const {postId} = req.query

     const {userId}   = req.user

     const {text} = req.body


     let post = await Post.findById(postId)

    const commentOBJ =  {
        text : text,
        userId : userId
    }


     post.comments.push(commentOBJ)


     await post.save()

    return res.json({message : "Comment SuccessFull !"})










    
 } catch (error) {
    console.log(error)
 }



}



module.exports = { createPost , likePost , commentOnPost }