const mongoose = require("mongoose")

const productCardSchema = new mongoose.Schema(
    {
        productImageUrl: String,
        description: String,
        productName: String,
        productPrice: Number,
        isOffer: Boolean,
        originalPrice: Number, 
        isDiscount: Boolean,
        isDeliveryAvailable: Boolean,
        isStock: Boolean,
        warranty: String,
        reviews: Number,
        rating: Number, 
 feature:[{
    type: String,
 }],
    },
   
)

const ProductCard = mongoose.model("ProductCard", productCardSchema)

module.exports = ProductCard