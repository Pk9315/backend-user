const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema(
    {
        recipeImageUrl: String,
        recipeName: String,
        serving: String,
        preparingTime: String,
        cookingTime: String,
        direction: String,
        ingredients: [{
            type: String,
        }],
        notes: String,
    }

)

const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe