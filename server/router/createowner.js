const express = require('express')
const router = express.Router()

const {createOwner, getOwner, getOneOwner, updateOwner, deleteOwner, ownerLog, updateOwnerAlert } = require('../controller/createowner')

router.post('/Createowner', createOwner)

router.post('/Createownerlog', ownerLog)

router.get('/Createowner', getOwner)

router.put('/Createowner/:id', updateOwnerAlert);

router.get('/Createowner/:id', getOneOwner)

router.put('/Createowner/:id', updateOwner)

router.delete('/Createowner/:id', deleteOwner)





module.exports = router;