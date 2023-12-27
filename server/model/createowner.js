const mongoose = require('mongoose')

const CreateownerSchema = new mongoose.Schema({
    
    first_name:{
        type: String,
        trim: true,
        unique: true,
    },
    last_name: {
        type: String,
        trim: true,
    },
    email:{
        type: String,
        trim: true,
        unique: true,
    },
    phone:{
        type: Number,
        trim: true,
    },
    password:{
        type: String
       
    },
    cpassword:{
        type: String,
        trim: true,
    },
    license_type:{
        type: String,
        trim: true,
    },
    license_no:{
        type: String,
        trim: true,
    },
    alert_message:{
        type:String,
        trim: true,
    }
},{timestamps:true})
module.exports = mongoose.model('Createowner', CreateownerSchema)
