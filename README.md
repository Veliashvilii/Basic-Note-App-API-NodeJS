# Basic Note App API

This project is a Node.js API that provides authentication and note management functionalities. It includes routes for user registration, login, password management, and note operations.

## Features

- **Authentication**
  - Register new users
  - User login
  - Forgot password functionality

- **User Management**
  - Retrieve current user details
  - Update user information
  - Change user password
  - Retrieve user's notes

- **Note Management**
  - Create, update, and delete notes
  - Retrieve individual notes

## API Endpoints

### Auth

- **POST** `/auth/login`
  - **Body:** `email`, `password`
  - Logs in a user and returns a token.

- **POST** `/auth/register`
  - **Body:** `full_name`, `email`, `password`
  - Registers a new user.

- **POST** `/auth/forgot-password`
  - **Body:** `email`
  - **Headers:** `Authorization: Bearer <token>`
  - Initiates a password reset process.

### User

- **GET** `/users/me`
  - **Headers:** `Authorization: Bearer <token>`
  - Retrieves the current user's information.

- **GET** `/users/me/notes`
  - **Headers:** `Authorization: Bearer <token>`
  - **Params:** `page` (optional, integer)
  - Retrieves the current user's notes.

- **PUT** `/users/me`
  - **Body:** `full_name`, `email`
  - **Headers:** `Authorization: Bearer <token>`
  - Updates the current user's information.

- **PUT** `/users/me/password`
  - **Body:** `password`, `new_password`, `new_password_confirmation`
  - **Headers:** `Authorization: Bearer <token>`
  - Updates the current user's password.

### Note

- **POST** `/notes`
  - **Body:** `title`, `note`
  - **Headers:** `Authorization: Bearer <token>`
  - Creates a new note.

- **DELETE** `/notes/:noteId`
  - **Headers:** `Authorization: Bearer <token>`
  - Deletes a note by its ID.

- **PUT** `/notes/:noteId`
  - **Body:** `title`, `note`
  - **Headers:** `Authorization: Bearer <token>`
  - Updates a note by its ID.

- **GET** `/notes/:noteId`
  - **Headers:** `Authorization: Bearer <token>`
  - Retrieves a note by its ID.

## Project Structure

```
project-root/
│
├── Config/
│
├── Controllers/
│   ├── Note/
│   │   ├── CreateNote.js
│   │   ├── DeleteNote.js
│   │   ├── GetNote.js
│   │   └── UpdateNote.js
│   └── User/
│       ├── GetMe.js
│       ├── GetMyNotes.js
│       ├── UpdateMyPassword.js
│       ├── UserUpdateMe.js
│       └── Auth.js
│
├── Middleware/
│   └── Auth.js
│
├── Models/
│   ├── Note/
│   │   └── CreateNote.js
│   └── Auth.js
│
├── Routes/
│   ├── Note/
│   │   ├── CreateNote.js
│   │   ├── DeleteNote.js
│   │   ├── GetNote.js
│   │   └── UpdateNote.js
│   └── User/
│       ├── GetMe.js
│       ├── GetMyNotes.js
│       ├── UpdateMyPassword.js
│       ├── UserUpdateMe.js
│       └── Auth.js
│
├── .env
├── .gitignore
├── index.js
├── package-lock.json
└── package.json
```

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd basic-note-app-api-nodejs
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and configure your environment variables:\n
   PORT: The port number on which the server will run.\n
   MONGO_URI: The connection string for your MongoDB database.\n
   SECRET_TOKEN: A secret key used for signing tokens (e.g., JWT).\n


5. Start the server:

   ```bash
   npm start
   ```

## Dependencies

- Express
- CORS
- Mongoose
- Bcryptjs
- JSONWebToken
- Dotenv

## License

This project is licensed under the ISC License.
