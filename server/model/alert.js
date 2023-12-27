const mongoose = require('mongoose')

const alertSchema = new mongoose.Schema({
    type_of_alert:{
        type: String,
        trim: true,
    },
    to: {
        type: String,
        trim: true,
    },
    alert_title:{
        type: String,
        trim: true,
    },
    description:{
        type: String,
        trim: true,
    },

},{timestamps:true})
module.exports = mongoose.model('alert',alertSchema)