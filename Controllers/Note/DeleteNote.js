const Note = require('../../Models/Note/CreateNote');

const deleteNote = async(req, res) => {
  try {
    const noteId = req.query.noteId;

    const note = await Note.findById(noteId);

    if (!note) {
      return res.status(404).json({
        status: "Failed",
        message: "Note not found!"
      });
    }

    await Note.findByIdAndDelete(noteId);

    const isNote = await Note.findById(noteId)
    if (!isNote) {
      res.status(200).json({
        status: "Success",
        message: "Note deleted successfully!"
      })
    } else {
      res.status(500).json({
        status: "Failed",
        message: "Note was not deleted successfully!"
      })
    }
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message
    })
  }
};

module.exports = deleteNote;