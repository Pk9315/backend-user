const mongoose = require("mongoose")

const todosSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        priority:{
            type: String,
        },
        dueDate: {
            type: Date,
        },
        completed:{
            type: Boolean,
            default: false,
        },
        creditedAt: {
            type: Date,
        },
        updatedAt:{
            type: Date,
        }


    }
)

const Todos = mongoose.model("Todos", todosSchema)

module.exports = Todos