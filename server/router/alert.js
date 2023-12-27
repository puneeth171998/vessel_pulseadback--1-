const express = require('express')
const router = express.Router()

const { createAlert, getAlert, getOneAlert, updateAlert, deleteAlert }  = require('../controller/alert')

router.post('/alert', createAlert)

router.get('/alert',getAlert)

router.get('/alert/:id',getOneAlert)

router.put('/alert/:id',updateAlert)

router.delete('/alert/:id',deleteAlert)

module.exports = router;