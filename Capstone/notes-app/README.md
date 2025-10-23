# 📝 Notes App

A full-stack Notes application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). This app allows users to create, edit, delete, search, and manage their notes with a beautiful, responsive interface.

![MERN Stack](https://img.shields.io/badge/MERN-Stack-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![Express.js](https://img.shields.io/badge/Express.js-Backend-yellow)
![React](https://img.shields.io/badge/React-Frontend-blue)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-green)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue)

---

## ✨ Features

- ✅ **Create Notes** - Add new notes with title and content
- ✅ **Edit Notes** - Update existing notes easily
- ✅ **Delete Notes** - Remove notes you no longer need
- ✅ **Search Functionality** - Filter notes by title or content
- ✅ **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ✅ **Beautiful UI** - Modern design with Tailwind CSS
- ✅ **Real-time Updates** - Instant feedback on all operations
- ✅ **RESTful API** - Clean and organized backend structure

---

## 🚀 Tech Stack

### Frontend
- **React** - UI library for building interactive interfaces
- **Axios** - HTTP client for API calls
- **Tailwind CSS** - Utility-first CSS framework for styling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

---

## 📁 Project Structure

```
notes-app/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NoteForm.jsx
│   │   │   ├── NoteList.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── server/                 # Express backend
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── noteController.js
│   ├── models/
│   │   └── Note.js
│   ├── routes/
│   │   └── noteRoutes.js
│   ├── .env.example
│   ├── server.js
│   └── package.json
├── .gitignore
└── README.md
```

---

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **npm** or **yarn**

### Step 1: Clone the Repository

```bash
git clone https://github.com/9MidhunPM/MERN.git
cd notes-app
```

### Step 2: Setup Backend (Server)

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your MongoDB connection string:
   ```env
   MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/notesdb
   PORT=5000
   ```

   **For local MongoDB:**
   ```env
   MONGO_URI=mongodb://localhost:27017/notesdb
   PORT=5000
   ```

5. Start the server:
   ```bash
   npm start
   ```

   The server will run on **http://localhost:5000**

### Step 3: Setup Frontend (Client)

1. Open a new terminal and navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```

   The app will open at **http://localhost:3000**

---

## 🎯 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notes` | Fetch all notes |
| `POST` | `/api/notes` | Create a new note |
| `PUT` | `/api/notes/:id` | Update a note by ID |
| `DELETE` | `/api/notes/:id` | Delete a note by ID |

### Example API Request (Create Note)

```javascript
POST http://localhost:5000/api/notes
Content-Type: application/json

{
  "title": "My First Note",
  "content": "This is the content of my note"
}
```

---

## 📸 Screenshots

### Home Page
A clean, modern interface with all your notes displayed in a responsive grid.

### Create/Edit Note
Intuitive form to add new notes or edit existing ones.

### Search Functionality
Quickly filter notes by title or content using the search bar.

---

## 🔒 Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

**Note:** Never commit your `.env` file to version control. Use `.env.example` as a template.

---

## 🌟 Future Enhancements

- 🔐 **User Authentication** - Login/signup functionality with JWT
- 🏷️ **Tags & Categories** - Organize notes with tags
- 📝 **Markdown Support** - Write notes in Markdown format
- 📌 **Pin Notes** - Pin important notes to the top
- 🎨 **Color Themes** - Customize note colors
- 📤 **Export Notes** - Export notes as PDF or Markdown
- 🔔 **Reminders** - Set reminders for notes
- 📱 **Progressive Web App** - Install as a mobile app

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Midhun PM**

- GitHub: [@9MidhunPM](https://github.com/9MidhunPM)

---

## 🙏 Acknowledgments

- MongoDB for the excellent database
- React team for the amazing frontend library
- Tailwind CSS for the beautiful styling utilities
- Express.js for the robust backend framework

---

## 📞 Support

If you have any questions or need help, please open an issue in the GitHub repository.

---

**Happy Note-Taking! 📝✨**