const mongoose = require("mongoose")

const productCardSchema = new mongoose.Schema(
    {
        productImageUrl: String,
        description: String,
        productName: String,
        productPrice: Number,
        isOffer: Boolean,
 feature:[
        {
            productPixel: String,
            productSensor: String, 
            isWifiAvailable: Boolean, 
            productWarranty: String,
        }
    ]
    },
   
)

const ProductCard = mongoose.model("ProductCard", productCardSchema)

module.exports = ProductCard