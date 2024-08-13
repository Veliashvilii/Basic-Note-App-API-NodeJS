const Auth = require('../../Models/Auth.js');

const getMe = async(req, res) => {
  try {
    const email = req.body.email
    const user = await Auth.findOne({email}).select('-password')

    if (user) {
      res.status(200).json({
        status: "Success",
        user
      });
    } else {
      return res.status(500).json({
        status: "Failed",
        message: "User not found!"
      })
    }
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: "Failed to found user!"
    })
  }
}

module.exports = getMe