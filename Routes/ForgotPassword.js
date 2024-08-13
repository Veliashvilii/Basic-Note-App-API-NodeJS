const express = require('express')
const {forgotPassword} = require('../Controllers/ForgotPassword.js')

const router = express.Router();

router.post('/auth/forgot-password', forgotPassword)

module.exports = router