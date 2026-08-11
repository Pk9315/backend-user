const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String, 
        },
        category: {
            type: String,
            enum: ["Peronal", "Work", "Study", "ideas", "Journal", "others"]
        },
        tags: [{
            type: String,
        }]
    },
    {timestamps: true}
)


const Note = mongoose.model("Note", noteSchema)

module.exports = Note