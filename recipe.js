// import express
const express = require("express")
const app = express()

const {initializeDatabase} = require("./db/db.connect")
const Recipe = require("./BE1.1HW_2/recipe.models")

app.use(express.json())
initializeDatabase()

// Create an Api for GET to Perform our recipe models
app.get("/", (req,res) =>{
    res.send("Recipe model works perfectly")
})

// Write a function for the recipe and add their data into the database
async function recipeData(recipe){
    try{
        const newRecipe = new Recipe(recipe)
        const savedRecipe = await newRecipe.save()
        return savedRecipe
    }
    catch(error){
        throw error
    }
}
// 3. Create an API with route "/recipes" to create a new recipe in the recipes database. 
// Make sure to handle errors properly. Test your API with Postman. Add the following recipe:

app.post("/recipes", async(req,res) =>{
    try{
        const saveRecipe = await recipeData(req.body)
        if(saveRecipe){
            res.status(200).json({message: "Recipe Added Successfully.", saveRecipe: saveRecipe})
        }else{
            res.status(404).json({error: "Recipe Data does not found"})
        }
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

// write a function for getting all data from database
async function readAllRecipe(){
    try{
        const readRecipe = await Recipe.find()
        return readRecipe 
    }
    catch(error){
        throw error
    }
}
// 6. Create an API to get all the recipes in the database as a response. 
// Make sure to handle errors properly.
app.get("/recipes", async(req,res)=>{
    try{
        const getRecipe = await readAllRecipe()
        if(getRecipe.length != 0){
            res.json(getRecipe)
        }else{
            res.status(404).json({error: "Recipe not found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetch Recipe Data"})
    }
})

// Write a function to execute a data as a recipe title
async function readRecipeByTitle(recipeName){
    try{
        const readRecipeByName = await Recipe.findOne({title: recipeName})
        return readRecipeByName
    }
    catch(error){
        throw error
    }
}
// 7. Create an API to get a recipe's details by its title. Make sure to handle errors properly.
app.get("/recipes/:title", async(req,res) =>{
    try{
        const saveRecipeByName = await readRecipeByTitle(req.params.title)
        if(saveRecipeByName){
            res.json(saveRecipeByName)
        }else{
            res.status(400).json({error: "Recipe not found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetch data"})
    }
})

// Write a function to get all the recipe by author
async function readAllRecipeByAuthor(authorName){
    try{
        const readRecipeByAuthor = await Recipe.find({author: authorName})
        return readRecipeByAuthor
    }
    catch(error){
        throw error
    }
}

// 8. Create an API to get details of all the recipes by an author. 
// Make sure to handle errors properly.

app.get("/recipes/author/:authorName", async(req,res) =>{
    try{
        const savedRecipeByAuthor = await readAllRecipeByAuthor(req.params.authorName)
        if(savedRecipeByAuthor.length != 0){
            res.json(savedRecipeByAuthor)
        }else{
            res.status(400).json({error: "Author not found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetch"})
    }
})

// Write a function to check the diffculty level
async function checkRecipeDifficult(diffcultyLvl){
    try{
        const readRecipeDifficult = await Recipe.find({difficulty: diffcultyLvl})
        return readRecipeDifficult 
    }
    catch(error){
        throw error
    }
}
// 9. Create an API to get all the recipes that are of "Easy" difficulty level.
app.get("/recipes/difficulty/:diffcultyLvl", async(req,res)=>{
    try{
        const saveRecipeLvl = await checkRecipeDifficult(req.params.diffcultyLvl)
        if(saveRecipeLvl.length != 0){
            res.json(saveRecipeLvl)
        }else{
            res.status(400).json({error: "Recipe not found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetch data"})
    }
})

// Write a function for the update the Recipe difficulty level
async function recipeUpdateByDifficult(recipeId, dataToUpdate){
    try{
        const readRecipe = await Recipe.findByIdAndUpdate(recipeId, dataToUpdate, {new: true})
        return readRecipe
    }
    catch(error){
        throw error
    }
}

// 10. Create an API to update a recipe's difficulty level with the help of its id. Update the difficulty of "Spaghetti Carbonara" from "Intermediate" to "Easy".
//  Send an error message "Recipe not found" if the recipe is not found. Make sure to handle errors properly.

app.post("/recipes/_id/:recipeId", async(req,res) =>{
    try{
        const saveRecipe = await recipeUpdateByDifficult(req.params.recipeId, req.body)
        if(saveRecipe){
            res.status(200).json({message: "Recipe updated successfully.", saveRecipe: saveRecipe})
        }else{
            res.status(400).json({error: "Recipe is not found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to update "})
    }
})

// Write a function to update Recipe prep time and cook time
async function updatedRecipeCookAndPrepTime(recipeTitle, dataToUpdate){
    try{
        const updatedCookAndPrep = await Recipe.findOneAndUpdate({title: recipeTitle}, dataToUpdate, {new: true})
        return updatedCookAndPrep
    }
    catch(error){
        throw error
    }
}

// 11. Create an API to update a recipe's prep time and cook time with the help of its title. Update the details of the recipe "Chicken Tikka Masala". 
// Send an error message "Recipe not found" if the recipe is not found. Make sure to handle errors properly.

app.post("/recipes/:title", async(req, res)=>{
    try{
        const saveRecipeCookAndPrep = await updatedRecipeCookAndPrepTime(req.params.title, req.body)
        if(saveRecipeCookAndPrep){
            res.status(200).json({message: "Recipe Updated Successfully.", saveRecipeCookAndPrep: saveRecipeCookAndPrep})
        }else{
            res.status(400).json({error: "Recipe not found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetch data"})
    }
})

// Write a function to delete a data from database
async function deleteRecipeById(recipeId){
    try{
        const deleteRecipe = await Recipe.findByIdAndDelete(recipeId)
        return deleteRecipe
    }
    catch(error){
        throw error
    }
}

// 12. Create an API to delete a recipe with the help of a recipe id. 
// Send an error message "Recipe not found" if the recipe does not exist. Make sure to handle errors properly.

app.delete("/recipes/:recipeId", async(req,res) =>{
    try{
        const recipeDelete = await deleteRecipeById(req.params.recipeId)
        if(recipeDelete){
            res.status(200).json({message: "Recipe Deleted Successfully.", recipeDelete: recipeDelete})
        }else{
            res.status(400).json({error: "recipe is not found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetch the recipe"})
    }
})
const PORT = 3000
app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})