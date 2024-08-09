# Pinterest-Like Clone

A feature-rich clone of Pinterest that allows users to upload and share images, manage profiles, and explore a dynamic feed of posts. This application incorporates user authentication, profile management, and a feed page to view posts and their owners.

## Features

- **Profile Management**: Users can update their profiles with personal information.
- **Image Upload**: Upload images with descriptions using Multer for file handling.
- **Post Description**: Add and display descriptions for each post.
- **User Authentication**: Secure login and registration using Passport.js.
- **Feed Page**: View a feed of posts from all users, including details about the post owner.
- **Logout**: Secure logout functionality.
- **Delete Account**: Users can permanently delete their accounts.
- **Session Management and Notifications**: Managed with Express Session and Connect Flash.

## Technologies Used

- **Frontend**:

  - **EJS**: Templating engine for rendering HTML views.
  - **CSS**: For styling and layout.

- **Backend**:
  - **Node.js**: JavaScript runtime for the server-side.
  - **Express.js**: Web framework for building APIs.
  - **Passport.js**: For authentication and user sessions.
  - **Multer**: For handling file uploads.
  - **MongoDB**: NoSQL database for storing user and post data.
  - **Express Session**: For session management.
  - **Connect Flash**: For flash messages and notifications.

## Installation

### Prerequisites

- Node.js
- npm or yarn

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Pritimohan/Pinterest-Clone.git
   cd Pinterest-Clone
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Set Environment Variables**
   Create a `.env` file in the root directory of the project. Add the following environment variables:

   ```env
   MONGO_URI=your-mongodb-uri
   SESSION_SECRET=your-session-secret
   ```

4. **Start the Server**
   ```bash
   npm start
   ```
5. **Visit the Application**
   Open `http://localhost:3000` in your browser.

## License

This project is open source and available under the [MIT License](LICENSE).

## Video Demo

- [Watch the video-1](https://www.linkedin.com/posts/pritimohan-shit_techinnovation-newfeatures-activity-7207476061054406656-dGT6?utm_source=share&utm_medium=member_desktop)
- [Watch the video-2](https://www.linkedin.com/posts/pritimohan-shit_webdevelopment-fullstack-nodejs-activity-7204407246825349120-sXR-?utm_source=share&utm_medium=member_desktop)

## Acknowledgements

- **[EJS](https://github.com/mde/ejs)**: For providing a powerful templating engine that helped in rendering dynamic HTML views.
- **[CSS](https://www.w3.org/Style/CSS/)**: For styling the application with flexibility and ease.
- **[Multer](https://github.com/expressjs/multer)**: For simplifying file uploads with its middleware.
- **[Passport.js](http://www.passportjs.org/)**: For its flexible authentication middleware that secured user sessions.
- **[MongoDB](https://www.mongodb.com/)**: For offering a robust, NoSQL database solution that stores user and post data efficiently.
- **[Express Session](https://github.com/expressjs/session)**: For handling session management in the application.
- **[Connect Flash](https://github.com/expressjs/connect-flash)**: For facilitating flash messages and notifications.

Special thanks to the open-source community for creating and maintaining these invaluable tools and libraries.

## Author

- [Pritimohan Shit]
