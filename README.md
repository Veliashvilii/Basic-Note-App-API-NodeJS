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
   git clone https://github.com/Veliashvilii/Basic-Note-App-API-NodeJS.git
   cd basic-note-app-api-nodejs
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and configure your environment variables:
   ```plaintext
   PORT: The port number on which the server will run.
   MONGO_URI: The connection string for your MongoDB database.
   SECRET_TOKEN: A secret key used for signing tokens (e.g., JWT).
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. **Testing with Postman**

   You can use [Postman](https://www.postman.com/) to test the API endpoints. Here's how to set up and send requests:

   1. **Download and Install Postman:**

      - Visit the [Postman website](https://www.postman.com/downloads/) to download and install the Postman app on your computer.

   2. **Import API Endpoints:**

      - You can manually create requests for each endpoint or import a Postman collection if available.

   3. **Configure Environment Variables:**

      - Set up environment variables in Postman for easy management of values like `token`, `baseURL`, and other dynamic parts of your requests.

   4. **Send Requests:**

      - Open Postman and create a new request for the desired endpoint. 

      - **Example:** To test the login endpoint, create a new `POST` request to `http://localhost:PORT/auth/login` and add a JSON body:

        ```json
        {
          "email": "your_email@example.com",
          "password": "your_password"
        }
        ```

      - Add `Authorization` headers where needed for authenticated routes, using the format `Bearer <token>`.

   5. **View Responses:**

      - Send the request and check the response for data or error messages. You should see a response similar to:

        ```json
        {
          "message": "User logged in successfully",
          "token": "your_jwt_token_here",
          "user": {
            "id": "user_id_here",
            "full_name": "Your Name",
            "email": "your_email@example.com"
          }
        }
        ```

   6. **Additional Testing:**

      - Continue to test other endpoints like creating notes, updating user details, etc., by following the same procedure: set the correct method, URL, headers, and body for each request.

## Dependencies

- Express
- CORS
- Mongoose
- Bcryptjs
- JSONWebToken
- Dotenv

## License

This project is licensed under the ISC License. See the [ISC License](https://opensource.org/licenses/ISC) for more details.

The ISC License is a permissive open-source license that is functionally similar to the MIT License. It allows for software to be freely used, modified, and distributed, provided that the license and copyright notice are included in all copies or substantial portions of the software.

### Key Points of ISC License

- **Permissions:** Allows for copying, modifying, merging, publishing, distributing, sublicensing, and selling the software.
- **Conditions:** Must include the original copyright notice and license text in all copies or substantial portions of the software.
- **Limitation:** The software is provided "as is," without warranty of any kind.
