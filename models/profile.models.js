const mongoose = require("mongoose")

const twitterSchema = new mongoose.Schema({
    profilePic: String,
    fullName: String,
    username: String,
    bio: String,
    companyName: String,
    city: String,
    profileLink: String,
    handle: String,
    followersCount: Number,
    followingCount: Number,
    isOnline: Boolean,

})

const Profile = mongoose.model('Profile', twitterSchema)

module.exports = Profile