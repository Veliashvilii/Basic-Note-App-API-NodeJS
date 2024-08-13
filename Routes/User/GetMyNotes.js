const express = require('express');
const getMyNotes = require('../../Controllers/User/GetMyNotes.js');
const auth = require('../../Middleware/Auth.js');

const router = express.Router()

router.get('/users/me/notes', auth, getMyNotes)

module.exports = router