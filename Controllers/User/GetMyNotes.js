const Note = require('../../Models/Note/CreateNote.js')

const getMyNotes = async(req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = 10;

    const notes = await Note.find()
      .skip((page - 1) * limit)
      .limit(limit);
    if (notes) {
      res.status(200).json({
        status: "Success",
        notes
      });
    } else {
      return res.status(500).json({
        status: "Failed",
        message: "Notes not found!"
      })
    }
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: "Failed to found notes!"
    })
  }
}

module.exports = getMyNotes