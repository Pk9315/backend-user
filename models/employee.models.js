const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema(
    {
        employeeImageUrl: String,
        employeeName: String,
        desgination: String,
        employeeIdNo: String,
        employeeDob: String,
        employeeEmail: String,
        telephonNo: Number,
        address: String,
    }
)

const Employee = mongoose.model("Employee", employeeSchema)

module.exports = Employee