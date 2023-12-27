const express = require('express')
const app = express()
const port = 3000
const connectDB = require('./config/db')
const cors = require('cors')
const dotenv = require('dotenv')
const Vess = require("./server/router/vesselReg")
const captain = require("./server/router/captain")
const alert = require("./server/router/alert")
const notification = require("./server/router/notification")
const vesselowner = require("./server/router/createowner")
const admin = require("./server/router/admin")
const createAisSocket = require("./config/createAisSocket")


dotenv.config()

connectDB()

// function handleAISData(updatedData, vessel) {
//     console.log('Updated Data:', updatedData);
//     console.log('Vessel Data:', vessel);
// }


const server = app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
const socket= require("./config/socket").init(server);

app.use(express.json())
app.use (cors())
app.use('/api',Vess)
app.use('/api',captain)
app.use('/api',alert)
app.use('/api',notification)
app.use('/api',vesselowner)
app.use('/api',admin)

createAisSocket()