const mongoose = require('mongoose')

// create mongoose scheema
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    mobile: {
        type:String,
        required: true,
        unique:true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    dob: {
        type:String,
        required: true
    },
    age: {
        type:String,
        required: true
    },
    address: {
        type:String,
        required: true
    },
    isActive: {
        type:String,
        default: true
    }
}, {
    collection: "users",
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)