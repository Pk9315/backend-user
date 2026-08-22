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

async function openNewResturant(newResturants){
    try{
        const resturant = new Resturant(newResturants)
        const saveResturant = await resturant.save()
    }
    catch(error){
        throw error
    }
}
openNewResturant(newResturants)