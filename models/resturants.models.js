const mongoose = require('mongoose')

const resturantsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        cuisine: [{
            type: String,
            enum: ['Italian', 'Mexican', 'Chinese', 'Indian', 'American', 'French', 'Japanese', 'Mediterranean', 'Thai', 'Vegetarian', 'Vegan',  'Other']
        }],
        location: {
            type: String,
            required: true,
        },
        owner: {
            type: String,
            required: true,
        },
        openingYear: {
            type: Number,
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0,
        },
        specialDish: [{
            type: String,
        }],
        photoUrl: [{
            type: String,
            
        }],
        phone: {
            type:String,
        },
        website:{
            type: String,
        },

    },{timestamps: true}
)

const Resturant = mongoose.model("Resturant", resturantsSchema)

module.exports = Resturant