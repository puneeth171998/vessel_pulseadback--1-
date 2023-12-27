const express = require('express')
const router = express.Router()



    const {register,login} = require('../controller/admin')


    router.post('/register-admin',register)
    router.post('/admin-login',login)


    module.exports = router;