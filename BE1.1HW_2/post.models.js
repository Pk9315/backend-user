const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
    {
        username: String,
        caption: String,
        postImageUrl: String,
        isLike: Boolean,
        comment: String,
        isShare: Boolean,
    }
)

const Post = mongoose.model("Post", postSchema)

module.exports = Post