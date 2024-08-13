const express = require('express');
const updateMyPassword = require('../../Controllers/User/UpdateMyPassword.js');
const auth = require('../../Middleware/Auth.js');

const router = express.Router()

router.put('/users/me/password', auth, updateMyPassword)

module.exports = router