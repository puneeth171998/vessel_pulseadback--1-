const mongoose = require('mongoose')

const vesselRegSchema = new mongoose.Schema({
    sl_no:{
        type:Number,
        
    },
    UserID:{
        type:String,
        // unique:true,
    },
    vessel_name:{
        type: String,
        trim: true,
    },
    vessel_owner: {
        type: String,
        trim: true,
    },
    captain_name:{
        type: String,
        trim: true,
    },
    port_name:{
        type:String,
        trim:true,
    },
    MMSI:{
        type: String,
        trim: true,
    },
    vessel_type:{
        type: String,
        trim: true,
    },
    latitude:{
        type: Number,

    },
    longitude:{
        type: Number,
    },
    vesselowner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Createowner',
      },
    alert_message:{
        type: String,
        trim: true,

    },

},{timestamps:true})
module.exports = mongoose.model('vesselReg',vesselRegSchema)
