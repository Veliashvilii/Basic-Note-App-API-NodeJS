const Note = require('../../Models/Note/CreateNote.js')

const updateNote = async(req, res) => {
  try {
    const noteId = req.query.noteId;
    const { title, note } = req.body;

    let updateFields = {};
    if (title) updateFields.title = title;
    if (note) updateFields.note = note;

    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({
        status: "Failed",
        message: "No note information provided to update!"
      });
    }

    await Note.findByIdAndUpdate(noteId, updateFields);
    const newNote = await Note.findById(noteId).lean();

    res.status(200).json({
      status: "Success",
      newNote,
      message: "Note information has been updated!"
    });
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: error.message
    });
  }
}

module.exports = updateNote