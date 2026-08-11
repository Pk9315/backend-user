const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        productImageUrl: String,
        productName: String,
        productType: String,
        productInfo: String,
        productColor: [{
            type: String,
        }],
        productSize: Number,
        productPrice: Number,
    }

)

const Product = mongoose.model("Product", productSchema)

module.exports = Product