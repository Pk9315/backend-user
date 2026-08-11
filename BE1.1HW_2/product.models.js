const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        productImageUrl: String,
        productName: String,
        description: String,
        price: String,
        isAvailable: Boolean,
        isOffer: Boolean,
        features: String,
        productCompany: String,

    }
)

const Product = mongoose.model("Product", productSchema)

module.exports = Product