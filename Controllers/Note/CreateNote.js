const Note = require('../../Models/Note/CreateNote.js')

const createNote = async(req, res) => {
  try {
    const { title, note } = req.body;
    const newNote = await Note.create({
      title, 
      note
    });
    res.status(201).json({
      status: "Success",
      newNote
    });
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: error.message
    });
  }
}

module.exports = { createNote };
