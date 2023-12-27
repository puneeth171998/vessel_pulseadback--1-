const express = require('express')
const router = express.Router()

const { createCaptain, getCaptain, getOnecaptain, updateCaptain, deleteCaptain } = require('../controller/captain')

router.post('/captain', createCaptain)

router.get('/captain',getCaptain)

router.get('/captain/:id',getOnecaptain)

router.put('/captain/:id',updateCaptain)

router.delete('/captain/:id',deleteCaptain)




module.exports = router;