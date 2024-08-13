const express = require('express');
const getNote = require('../../Controllers/Note/GetNote.js');
const auth = require('../../Middleware/Auth.js');

const router = express.Router()

router.get('/notes', auth, getNote)

module.exports = router