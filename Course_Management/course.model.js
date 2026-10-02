const mongoose = require("mongoose")
const courseManagement = new mongoose.Schema(
    {
        courseName:{
            type: String,
            required: true
        },
        subject:{
            type: String,
            required: true
        }, 
        medium:{
            type: String,
            required: true,
            enum:["Hindi", "English","Telegu","Bangali","Marathi","Kanada"]
        },
        duration:{
            type: String,
            required: true,
        },
        price:{
            type:Number,
            required: true,
        },
        instructor:{
            type:String,
            required: true,
        }

    }
,{timestamps: true})

const Course =  mongoose.model("Course", courseManagement)

module.exports = Course