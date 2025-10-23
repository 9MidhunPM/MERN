# 🚀 Quick Start Guide

This guide will help you set up and run the Notes App on your local machine.

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Running the Application](#running-the-application)
5. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **MongoDB** - Choose one:
  - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Cloud - Recommended for beginners)
  - [MongoDB Community Edition](https://www.mongodb.com/try/download/community) (Local installation)
- **Git** - [Download here](https://git-scm.com/)

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/9MidhunPM/MERN.git
cd MERN/notes-app
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

**Expected output:**
```
added 123 packages in 15s
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

**Expected output:**
```
added 1456 packages in 45s
```

---

## Configuration

### Setting up MongoDB

#### Option 1: MongoDB Atlas (Cloud - Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
5. Replace `<password>` with your actual password
6. Add database name at the end: `mongodb+srv://username:password@cluster.mongodb.net/notesdb`

#### Option 2: Local MongoDB

If you have MongoDB installed locally:
```
mongodb://localhost:27017/notesdb
```

### Configure Environment Variables

1. Navigate to the `server` directory
2. Copy the example file:
   ```bash
   cp .env.example .env
   ```
   
   **On Windows PowerShell:**
   ```powershell
   Copy-Item .env.example .env
   ```

3. Open `.env` and update with your MongoDB connection string:
   ```env
   MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/notesdb
   PORT=5000
   ```

---

## Running the Application

### Start Backend Server

1. Open a terminal in the `server` directory
2. Run:
   ```bash
   npm start
   ```

**Expected output:**
```
Server is running on http://localhost:5000
MongoDB connected
```

✅ **Backend is ready!**

### Start Frontend Application

1. Open a **new terminal** in the `client` directory
2. Run:
   ```bash
   npm start
   ```

**Expected output:**
```
Compiled successfully!
You can now view notes-app in the browser.
Local: http://localhost:3000
```

✅ **Frontend is ready!**

### Access the Application

Open your browser and go to:
```
http://localhost:3000
```

---

## Troubleshooting

### Issue: "MongoDB connection error"

**Solution:**
- Verify your `.env` file has the correct `MONGO_URI`
- Ensure your MongoDB Atlas IP whitelist includes your current IP (or use `0.0.0.0/0` for all IPs)
- Check that your MongoDB cluster is running

### Issue: "Port 5000 already in use"

**Solution:**
- Change the port in `.env`:
  ```env
  PORT=5001
  ```
- Update the API URL in `client/src/services/api.js`:
  ```javascript
  const API_URL = 'http://localhost:5001/api/notes';
  ```

### Issue: "Cannot connect to backend"

**Solution:**
- Ensure the backend server is running
- Check that CORS is enabled in `server/server.js`
- Verify the API URL in `client/src/services/api.js` matches your backend port

### Issue: React app won't start

**Solution:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear cache: `npm cache clean --force`

### Issue: Styling not showing

**Solution:**
- Ensure Tailwind CSS is installed: `npm install -D tailwindcss postcss autoprefixer`
- Verify `tailwind.config.js` and `postcss.config.js` exist in the client directory
- Restart the development server

---

## Development Scripts

### Backend (`server` directory)

```bash
npm start          # Start the server
npm run dev        # Start with nodemon (auto-restart on changes)
```

### Frontend (`client` directory)

```bash
npm start          # Start development server
npm run build      # Create production build
npm test           # Run tests
```

---

## Next Steps

- ✅ Create your first note
- ✅ Try the search functionality
- ✅ Edit and delete notes
- ✅ Explore the code and customize it!

---

## Need Help?

- 📖 Check the main [README.md](README.md)
- 🐛 [Open an issue](https://github.com/9MidhunPM/MERN/issues)
- 💬 Ask questions in the repository discussions

---

**Happy Coding! 🎉**
