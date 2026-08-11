const mongoose = requir("mongoose")

const postSchema = new mongoose.Schema({})

const Post = mongoose.model("Post", postSchema)

module.exports = Post