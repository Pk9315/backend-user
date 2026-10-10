// 1. Create an API with route "/restaurants" to read all restaurants from the Database. Test your API with Postman.
const express = require("express")
const app = express()

const {initializeDatabase} = require("./db/db.connect")
const Resturant = require("./models/resturants.models")

app.use(express.json())
initializeDatabase()

async function readAllRestaurant(){
    try{
        const restaurant = await Resturant.find()
        return restaurant
    }
    catch(error){
        console.log(error)
    }
}

// to write a get API Route 
app.get("/restaurants", async(req,res) =>{
    try{
        const restaurants = await readAllRestaurant()
        if(restaurants.length != 0){
            res.json(restaurants)
        }else{
            res.status(404).json({error: "Restaurants not found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fatch Restaurants Data"})
    }
})

// 2. Create an API with route "/restaurants/:restaurantName" to read a restaurant by its name. 
// Test your API with Postman.

async function readRestaurantByName(restaurantName){
    try{
        const nameRestaurants = await Resturant.findOne({name: restaurantName})
        return nameRestaurants
    }
    catch(error){
        throw error
    }
}

app.get("/restaurants/:restaurantsName", async (req,res) =>{
    try{
        const restaurantName = await readRestaurantByName(req.params.restaurantsName)
        if(restaurantName){
            res.json(restaurantName)
        }else{
            res.status(404).json({error: "Restaurants Name not found"})
        }

    }
    catch(error){
        res.status(500).json({error: "restaurants data failed while fetching"})
    }

})

// 3. Create an API with route "/restaurants/directory/:phoneNumber" to read a restaurant by phone number. 
// Test your API with Postman.

async function readRestaurantByNumber(number){
    try{
        const readByNumber = await Resturant.findOne({phoneNumber: number})
        return readByNumber
    }
    catch(error){
        throw error 
    }
}

app.get("/restaurants/phoneNumber/:number", async(req,res) =>{
    try{
        const restaurantNumber = await readRestaurantByNumber(req.params.number)
        if(restaurantNumber){
            res.json(restaurantNumber)
        }else{
            res.status(404).json({error: "Restaurant by number not found"})
        }
    }
    catch(error){
        res.status(500).json({error: "failed to fetch data"})
    }
})

// 4. Create an API with route "/restaurants/cuisine/:cuisineName" to read all restaurants by cuisine. 
// Test your API with Postman.

async function readRestaurantByCuisine(cuisineName){
    try{
        const readCuisineName = await Resturant.find({cuisine: cuisineName})
        return readCuisineName
    }
    catch(error){
        throw error
    }
}
app.get("/restaurants/cuisine/:cuisineName", async (req,res) =>{
    try{
        const restaurantByCuisine = await readRestaurantByCuisine(req.params.cuisineName)
        if(restaurantByCuisine.length != 0){
            res.json(restaurantByCuisine)
        }else{
            res.status(404).json({error: "restaurant not found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed the fecthing data"})
    }
})

// 5. Create an API with route "/restaurants/location/:restaurantLocation" to read all restaurants by location. Test your API with Postman.
async function readRestaurantByLocation(restaurantLocation){
    try{
        const locationRestaurant = await Resturant.find({location: restaurantLocation})
            return locationRestaurant
    }
    catch(error){
        throw error
    }
}

app.get("/restaurants/location/:restaurantLocation", async (req, res) =>{
    try{
        const restaurantLocations = await readRestaurantByLocation(req.params.restaurantLocation)
        if(restaurantLocations.length != 0){
            res.json(restaurantLocations)
        }else{
            res.status(404).json({error: "Restaurant not found"})
        }
    }catch(error){
        res.status(500).json({error: "failed fetching the data"})
    }
})
const PORT = 3000

app.listen(PORT, () =>{
    console.log("Server is running on ", PORT)
})