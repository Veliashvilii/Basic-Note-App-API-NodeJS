const express = require('express')
const {register, login} = require('../Controllers/Auth.js')

const router = express.Router();

router.post('/auth/register', register)
router.post('/auth/login', login)

module.exports = router
 