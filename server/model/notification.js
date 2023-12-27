const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    date:{
        type: String,
        trim: true,
    },
    message:{
        type: String,
        trim: true,
    },

},{timestamps:true})
module.exports = mongoose.model('notification',notificationSchema)