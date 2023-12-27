const mongoose = require('mongoose')

const captainSchema = new mongoose.Schema({
    captain_name:{
        type: String,
        trim: true,
    },
    licence_id: {
        type: String,
        trim: true,
    },
    ph_no:{
        type: Number,
        trim: true,
    },
    email:{
        type: String,
        trim: true,
    },
    address:{
        type: String,
        trim: true,
    },
},{timestamps:true})
module.exports = mongoose.model('captain',captainSchema)
