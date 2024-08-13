const mongoose = require('mongoose')

const createNoteSchema = new mongoose.Schema({
  title: {
   type: String,
   required: true,
   trim: true
  },

  note: {
   type: String,
   required: true,
  },
})

module.exports = mongoose.model('Note', createNoteSchema)