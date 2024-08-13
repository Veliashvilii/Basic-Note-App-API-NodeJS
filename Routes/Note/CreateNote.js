const express = require('express');
const {createNote} = require('../../Controllers/Note/CreateNote.js')

const router = express.Router();

router.post('/notes', createNote)

module.exports = router