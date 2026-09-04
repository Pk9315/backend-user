const {initializeDatabase} = require("./db/db.connect")
// const fs = require('fs')
const Car = require("./BE1_Assignment/models/Cars.models")
initializeDatabase()

// const jsonData = fs.readFileSync("cars.json", "utf-8")
// const carsData = JSON.parse(jsonData)

// function carDetails(){
//     try{
//         for(const carData of carsData){
//             const newCars = new Car({
//                 brand: carData.brand,
//                 model: carData.model,
//                 year: carData.year,
//                 bodyStyle: carData.bodyStyle,
//                 fuelType: carData.fuelType,
//                 transmission: carData.transmission,
//                 engine: carData.engine,
//                 mileage: carData.mileage,
//                 color: carData.color,
//                 price: carData.price,
//                 condition: carData.condition,
//                 description: carData.description,
//                 photos: carData.photos,
//                 inMarket: carData.inMarket,
//             })
            
//         }
//         newCars.save()
//     }
//     catch(error){
//         console.log("error seeding the data", error)
//     }
// }
// carDetails()

const carData = {
  brand: "Ford",
  model: "Mustang",
  year: 2019,
  bodyStyle: "Convertible",
  fuelType: "Gasoline",
  transmission: "Automatic",
  engine: "5.0L V8",
  mileage: 25000,
  color: "Red",
  price: 3500000,
  condition: "Used",
  description: "Exciting Ford Mustang convertible with powerful V8 engine.",
  photos: [
    "https://example.com/mustang-photo1.jpg",
    "https://example.com/mustang-photo2.jpg",
    "https://example.com/mustang-photo3.jpg"
  ]
};
const newCarData = {
  brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg"
  ]
};
async function showCar(car){
    try{
        const showCarDetails =  new Car(car)
        const saveCar = await showCarDetails.save() 
    }
    catch(error){
        console.log(error)
    }

}
// showCar(carData)
// showCar(newCarData)


async function readAllCars(){
    try{
        const readAllCar = await Car.find()
        console.log(readAllCar)
    }
    catch(error){
        console.log("Error while showing all car: ", error)
    }
}
// readAllCars()

async function showCarByBrand(carBrand){
    try{
        const showBrand = await Car.findOne({brand: carBrand})
        console.log(showBrand)
    }
    catch(error){
        console.log(error)
    }
}
// showCarByBrand("Ford")

async function findCarByColor(carColor){
    try{
        const findCarColor = await Car.findOne({color: carColor})
        console.log(findCarColor)
    }
    catch(error){
        console.log(error)
    }
}
// findCarByColor("Black")

async function updateCarPrice(carModel, dataToUpdate){
    try{
        const updateCars = await Car.findOneAndUpdate({model: carModel},  dataToUpdate, {new: true})
        console.log(updateCars)
    }
    catch(error){
        console.log(error)
    }
}
// updateCarPrice("Corolla",  {price: 2300000})

async function carCondition(carModel, dataToUpdate){
    try{
        const updateCarCondition = await Car.findOneAndUpdate({model: carModel}, dataToUpdate, {new: true})
        console.log(updateCarCondition)
    }
    catch(error){
        console.log(error)
    }
}
// carCondition("Model S", {condition: "Used"})

async function deleteById(carId){
    try{
        const deleteCar = await Car.findByIdAndDelete(carId)
        console.log(deleteCar)
    }
    catch(error){
        console.log(error)
    }
}
// deleteById("6a87648f6b1dfbba30c82dbc")

async function deleteCarByBody(carBody){
    try{
        const updatedCar = await Car.findOneAndDelete({bodyStyle: carBody})
        console.log(updatedCar)
    }
    catch(error){
        console.log(error)
    }
}
deleteCarByBody("Coupe")