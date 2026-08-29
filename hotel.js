const {initializeDatabase} = require("./db/db.connect")
const Hotel = require("./BE2.1_HW2/model/hotel.models")

initializeDatabase()

const newHotel = {
  name: "New Hotel",
  category: ["Mid-Range"],
  location: "123 Main Street, Frazer Town",
  rating: 4.0,
  reviews: [],
  website: "https://hotel-example.com",
  phoneNumber: "+1234567890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Room Service"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel-photo1.jpg", "https://example.com/hotel-photo2.jpg"],
};

const lakeViewHotel = {
  name: "Lake View",
  category: "Mid-Range",
  location: "124 Main Street, Anytown",
  rating: 3.2,
  reviews: [],
  website: "https://lake-view-example.com",
  phoneNumber: "+1234555890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Boating"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: false,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: false,
  photos: ["https://example.com/hotel1-photo1.jpg", "https://example.com/hotel1-photo2.jpg"],
};
const sunsetResort = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: ["Room Service", "Horse riding", "Boating", "Kids Play Area", "Bar"],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel2-photo1.jpg", "https://example.com/hotel2-photo2.jpg"],
};
async function findHotel(newHotels){
    try{
        const hotel = new Hotel(newHotels)
        const saveHotelData = await hotel.save()
    }
    catch(error){
        throw error
    }
}
// findHotel(newHotel)
// findHotel(lakeViewHotel)
// findHotel(sunsetResort)

async function readAllHotel(){
    try{
        const readAllHotel = await Hotel.find()
        console.log(readAllHotel)
    }
    catch(error){
        console.log(error)
    }
}
// readAllHotel()

async function readHotelByName(hotel){
    try{
        const readHotel = await Hotel.findOne({name: hotel})
        console.log(readHotel)
        
    }
    catch(error){
        console.log(error)
    }
}
// readHotelByName("Lake View")

async function readAllParking(){
    try{
        const readParking = await Hotel.find({isParkingAvailable:true})
        console.log(readParking)
    }
    catch(error){
        console.log(error)
    }
}
// readAllParking()

async function hasResturantInHotel(){
    try{
        const hasResturant = await Hotel.find({isRestaurantAvailable: true})
        console.log(hasResturant)
    }
    catch(error){
        console.log(error)
    }
}
// hasResturantInHotel()

async function hotelWithMidRange(){
    try{
        const hotelMidRange = await Hotel.find({category: "Mid-Range"})
        console.log(hotelMidRange)
    }
    catch(error){
        console.log(error)
    }
}
// hotelWithMidRange()

async function hotelPriceRange(){
    try{
        const hotelRange = await Hotel.find({priceRange: "$$$$ (61+)"})
        console.log(hotelRange)
    }
    catch(error){
        console.log(error)
    }
}
// hotelPriceRange()


async function hotelWithRating(){
    try{
        const hotelRating = await Hotel.find({rating: 4.0 })
        console.log(hotelRating)
    }
    catch(error){
        console.log(error)
    }
}
// hotelWithRating()

async function readHotelByPhoneNumber(number){
    try{
        const hotelPhoneNum = await Hotel.findOne({phoneNumber: number})
        console.log(hotelPhoneNum)

    }
    catch(error){
        console.log(error)
    }
}
// readHotelByPhoneNumber("+129655890")


async function updatedHotelResturant(hotelId, dataToUpdate){
    try{
        const updateResturant = await Hotel.findByIdAndUpdate(hotelId, dataToUpdate, {new: true})
        console.log(updateResturant)
    }
    catch(error){
        console.log("error")
    }
}
// updatedHotelResturant("6a8c53aaea0ebe7154ea7f50", {rating: 5})

async function updateHotel(hotelId, dataToUpdate){
    try{
        const hotelTimeUpdate = await Hotel.findByIdAndUpdate(hotelId, dataToUpdate, {new : true})
        console.log(hotelTimeUpdate)
    }
    catch(error){
        console.log(error)
    }
}
// updateHotel("6a8c53aaea0ebe7154ea7f4f", {checkOutTime: "11:00AM"})

async function updatedHotelRating(hotelName, dataToUpdate){
    try{
        const updateRating = await Hotel.findOneAndUpdate({name: hotelName}, dataToUpdate, {new: true})
        console.log(updateRating)
    }
    catch(error){
        console.log(error)
    }
}
// updatedHotelRating("Sunset Resort", {rating: 4.2})

async function updatePhoneNumber(hotelNumber, dataToUpdate){
    try{
        const hotelNumberUpdate = await Hotel.findOneAndUpdate({phoneNumber: hotelNumber}, dataToUpdate, {new: true})
        console.log(hotelNumberUpdate)
    }
    catch(error){
        console.log(error)
    }
}
// updatePhoneNumber("+1234555890", {phoneNumber: "+1997687392"})

// async function readHotelByName(hotel){
//     try{
//         const readHotel = await Hotel.findOne({name: hotel})
//         console.log(readHotel)
//         console.log(readHotel.phoneNumber)
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// readHotelByName("Sunset Resort")

async function deleteHotelById(hotelId){
    try{
        const deleteId = await Hotel.findByIdAndDelete(hotelId)
        console.log(deleteId)
    }
    catch(error){
        console.log("Error while delete the hotel by Id: ", error)
    }
}
// deleteHotelById("6a89585c77359febf11cd2bf")

async function deleteHotelByPhoneNumber(hotelNumber){
    try{
        const deleteByPhone = await Hotel.findOneAndDelete({phoneNumber: hotelNumber})
        console.log(deleteByPhone)
    }
    catch(error){
        console.log("Error while deleting number: ", error)
    }
}
deleteHotelByPhoneNumber("+1234567890")