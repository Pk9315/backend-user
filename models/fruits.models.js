const mongoose = require("mongoose")

const fruitsSchema = new mongoose.Schema(
    {
        fruitName: String,
        description: String,
        colories: Number,
        carbohydrates: Number,
        protein: Number,
        fat: Number,
        
    }

)

const Fruit = mongoose.model("Fruit", fruitsSchema)

module.exports = Fruit