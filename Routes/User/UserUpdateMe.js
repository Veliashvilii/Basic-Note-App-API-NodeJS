const express = require('express');
const userUpdateMe = require('../../Controllers/User/UserUpdateMe.js');
const auth = require('../../Middleware/Auth.js');

const router = express.Router()

router.put('/users/me', auth, userUpdateMe)

module.exports = router