const express = require('express')
const router = express.Router()

const{createvesselReg, getvesselReg, getOnevesselReg, updatevesselReg, deletevesselReg}=require ('../controller/vesselReg')

router.post('/vesselReg', createvesselReg)

router.get('/vesselReg',getvesselReg)

router.get('/vesselReg/:id',getOnevesselReg)

router.put('/vesselReg/:id',updatevesselReg)

router.delete('/vesselReg/:id',deletevesselReg)


module.exports = router;