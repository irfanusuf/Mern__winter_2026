const multer  = require('multer')



const upload = multer({ dest: 'uploads/' })    // media files after uploads will be saved in upload folder 

const multMid = upload.single("postImage")




module.exports = multMid