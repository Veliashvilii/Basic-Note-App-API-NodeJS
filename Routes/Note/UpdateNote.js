const express = require('express');
const UpdateNote = require('../../Controllers/Note/UpdateNote');
const auth = require('../../Middleware/Auth.js');

const router = express.Router();

router.put('/notes', auth, UpdateNote);

module.exports = router;