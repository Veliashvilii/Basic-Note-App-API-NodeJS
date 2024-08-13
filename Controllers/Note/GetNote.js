const Note = require('../../Models/Note/CreateNote.js')

const getNote = async(req, res) => {
  try {
    const noteId = req.query.noteId;
    const note = await Note.findById(noteId)

    if (note) {
      res.status(200).json({
        status: "Success",
        note
      });
    } else {
      return res.status(500).json({
        status: "Failed",
        message: "Note not found!"
      })
    }
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: "Failed to found notes!"
    })
  }
}

module.exports = getNote