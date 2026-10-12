const express = require("express")
const app = express()

const {initializeDatabase} = require("./db/db.connect")
const Hotel = require("./BE2.1_HW2/model/hotel.models")

app.use(express.json())
initializeDatabase()

// 1. Create an API with route "/hotels" to read all hotels from the Database. Test your API with Postman.
async function readAllHotel(){
    try{
        const readHotel = await Hotel.find()
        return readHotel
    }
    catch(error){
        throw error
    }
}

app.get("/hotels", async(req,res) =>{
    try{
        const hotelRead = await readAllHotel()
        if(hotelRead.length != 0){
            res.json(hotelRead)
        }else{
            res.status(404).json({error: "Hotels not found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetching data"})
    }
})
// 2. Create an API with route "/hotels/:hotelName" to read a hotel by its name. Test your API with Postman.
async function readHotelByName(hotelName){
    try{
        const readName = await Hotel.findOne({name: hotelName})
        return readName

    }
    catch(error){
        throw error
    }
}
app.get("/hotels/:hotelName", async(req,res) =>{
    try{
        const getHotelByName = await readHotelByName(req.params.hotelName)
        if(getHotelByName){
            res.json(getHotelByName)
        }else{
            res.status(404).json({error: "Hotel Not Found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetching data"})
    }
})
// 3. Create an API with route "/hotels/directory/:phoneNumber" to read a hotel by phone number. Test your API with Postman.
async function readHotelByNumber(number){
    try{
        const readByNumber = await Hotel.findOne({phoneNumber: number})
        return readByNumber
    }
    catch(error){
        throw error
    }
}
app.get("/hotels", async(req,res) =>{
    try{
        const hotelNumber = await readHotelByNumber(req.params.number)
        if(hotelNumber){
            res.json(hotelNumber)
        }else{
            res.status(404).json({error: "hotel not found"})
        }
    }
    catch(error){
        res.status(500).json({error: "failed fetching the data"})
    }
})
// 4. Create an API with route "/hotels/rating/:hotelRating" to read all hotels by rating. Test your API with Postman.
async function readAllHotelByRating(hotelRating){
    try{
        const readRating = await Hotel.find({rating: hotelRating})
        return readRating
    }catch(error){
        throw error
    }
}
app.get("/hotels/rating/:hotelRating", async(req,res) =>{
    try{
        const getHotelRating = await readAllHotelByRating(req.params.hotelRating)
        if(getHotelRating.length != 0){
            res.json(getHotelRating)
        }else{
            res.status(404).json({error: "Hotel Not Found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetching data"})
    }
})
// 5. Create an API with route "/hotels/category/:hotelCategory" to read all hotels by category. Test your API with Postman.
async function readHotelByCategory(hotelCategory){
    try{
        const categoryHotel = await Hotel.find({category: hotelCategory})
        return categoryHotel
    }
    catch(error){
        throw error
    }
}
app.get("/hotels/category/:hotelCategory", async(req,res) =>{
    try{
        const getHotelCategory = await readHotelByCategory(req.params.hotelCategory)
        if(getHotelCategory != 0){
            res.json(getHotelCategory)
        }else{
            res.status(404).json({error: "Hotel Not Found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetching hotel"})
    }
})
const PORT = 3000
app.listen(PORT, () =>{
    console.log("Server is running on Port", PORT)
})