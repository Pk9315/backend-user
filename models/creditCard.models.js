const mongoose = require("mongoose")

const creditCardSchema = new mongoose.Schema(
    {
        companyName: String,
        username: String,
        cardNumber: Number,
        cardValid: Number,
    }
)

const CreditCard = mongoose.model("CreditCard", creditCardSchema)

module.exports = CreditCard