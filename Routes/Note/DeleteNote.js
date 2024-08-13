const express = require('express');
const DeleteNote = require('../../Controllers/Note/DeleteNote.js');
const auth = require('../../Middleware/Auth.js')

const router = express.Router();

router.delete('/notes', auth, DeleteNote);

module.exports = router