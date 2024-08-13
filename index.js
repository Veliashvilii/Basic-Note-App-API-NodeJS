const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const database = require('./Config/Database.js')
const Auth = require('./Routes/Auth.js')
const ForgotPassword = require('./Routes/ForgotPassword.js')
const CreateNote = require('./Routes/Note/CreateNote.js')
const GetMe = require('./Routes/User/GetMe.js')
const GetMyNotes = require('./Routes/User/GetMyNotes.js')
const GetNote = require('./Routes/Note/GetNote.js')
const UserUpdateMe = require('./Routes/User/UserUpdateMe.js')
const UpdateMyPassword = require('./Routes/User/UpdateMyPassword.js')
const UpdateNote = require('./Routes/Note/UpdateNote.js')
const DeleteNote = require('./Routes/Note/DeleteNote.js')

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))

app.use('/', Auth)
app.use('/', ForgotPassword)
app.use('/', CreateNote)
app.use('/', GetMe)
app.use('/', GetMyNotes)
app.use('/', GetNote)
app.use('/', UserUpdateMe)
app.use('/', UpdateMyPassword)
app.use('/', UpdateNote)
app.use('/', DeleteNote)

database()
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is runing on PORT: 3000");
})