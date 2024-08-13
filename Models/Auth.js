const mongoose = require('mongoose')

const AuthSchemah = new mongoose.Schema({
   full_name: {
    type: String,
    required: true,
    trim: true
   },

   email: {
    type: String,
    required: true,
    unique: true
   },

   password: {
    type: String,
    required: true,
   }
})

module.exports = mongoose.model('Auth', AuthSchemah)