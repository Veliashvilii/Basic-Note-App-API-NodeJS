const express = require('express')
const getMe = require('../../Controllers/User/GetMe.js')
const auth = require('../../Middleware/Auth.js')

const router = express.Router();

router.get('/users/me', auth, getMe)

module.exports = router