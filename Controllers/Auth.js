const Auth = require('../Models/Auth.js');
const Bcrypt = require('bcryptjs');
const Jwt = require('jsonwebtoken')

const register = async(req, res) => {
  try {
    const {full_name, email, password} = req.body
    const user = await Auth.findOne({email})

    if (user) {
      return res.status(500).json({message: "This Email was used for register!"})
    }

    if (password.length < 6) {
      return res.status(500).json({message: "This password is invalid!"})
    }

    const passwordHash = await Bcrypt.hash(password, 12)
    const newUser = await Auth.create({full_name, email, password: passwordHash})

    const userToken = Jwt.sign({id: newUser.id}, process.env.SECRET_TOKEN, {expiresIn: '1h'});
    res.status(201).json({
      status: "Success",
      newUser,
      userToken
    });
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: error.message
    })
  }
}

const login = async(req, res) => {
  try {
    const {email, password} = req.body
    const user = await Auth.findOne({email})

    if (!user) {
      return res.status(500).json({
        status: "Failed",
        message: "This email is not found on system!"
      })
    }

    const comparePassword = await Bcrypt.compare(password, user.password)
    if (!comparePassword) {
      return res.status(500).json({
        status: "Failed",
        message: "Your password is not match!"
      })
    }

    const token = Jwt.sign({id: user.id}, process.env.SECRET_TOKEN, {expiresIn: '1h'})
    res.status(200).json({
      status: "Success",
      user,
      token
    });
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: error.message
    })
  }
}

module.exports = {register, login}