const express = require('express')
const router = express.Router()

const { createNotification, getNotification, getOnenotification, updateNotification, deleteNotification}  = require('../controller/notification')

router.post('/notification', createNotification)

router.get('/notification', getNotification)

router.get('/notification/:id',getOnenotification)

router.put('/notification/:id',updateNotification)

router.delete('/notification/:id',deleteNotification)


module.exports = router;