const {initializeDatabase} = require("./db/db.connect")
const Resturant = require("./BE2.1_HW1/model/restuarant.models")

initializeDatabase()

const newResturants = {
  name: "Cha Cha",
  cuisine: ["Spanish"],
  location: "123 Main Street, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://example.com",
  phoneNumber: "+1234567890",
  openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: true,
  isDeliveryAvailable: true,
  menuUrl: "https://example.com/menu",
  photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
};
const somiResturants = {
    name: "Somi",
  cuisine: ["Greek"],
  location: "11 Main Road, Gem",
  rating: 4.3,
  reviews: [],
  website: "https://somi-example.com",
  phoneNumber: "+1234997390",
  openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: false,
  isDeliveryAvailable: true,
  menuUrl: "https://somi-example.com/menu",
  photos: ["https://example.com/somi-photo1.jpg", "https://example.com/somi-photo2.jpg"],
}
const yoChinaResturants = {
    name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: ["https://example.com/yo-photo1.jpg", "https://example.com/yo-photo2.jpg", "https://example.com/yo-photo3.jpg"]
}
async function openNewResturant(newResturants){
    try{
        const resturant = new Resturant(newResturants)
        const saveResturant = await resturant.save()
    }
    catch(error){
        throw error
    }
}
// openNewResturant(newResturants)
// openNewResturant(somiResturants)
// openNewResturant(yoChinaResturants)

async function readAllResturantData(){
    try{
        const readResturant = await Resturant.find()
       console.log(readResturant) 
    }
    catch(error){
        console.log(error)
    }
}
// readAllResturantData()

async function readNewResturant(resturants){
    try{
        const readNewResturant = await Resturant.findOne({name: resturants})
        console.log(readNewResturant.reservationsNeeded)
    }
    catch(error){
        console.log(error)
    }
}
// readNewResturant("Cha Cha")
// readNewResturant("Yo China")

async function readAllReservation(){
    try{
        const reservation = await Resturant.find({reservationsNeeded: true})
        console.log(reservation)
    }
    catch(error){
        console.log(error)
    }
}
// readAllReservation()

async function readPhoneNumber(resturantNumber){
    try{
        const phoneNumber = await Resturant.findOne({phoneNumber: resturantNumber})
        console.log(phoneNumber)
    }
    catch(error){
        console.log(error)
    }
}
// readPhoneNumber("+1288997392")

async function findResturantsCuisine(dishName){
    try{
        const findCuisine = await Resturant.find({cuisine: dishName})
        console.log(findCuisine)
    }
    catch(error){
        console.log(error)
    }
}
findResturantsCuisine("Italian")
