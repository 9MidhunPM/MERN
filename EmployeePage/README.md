# Employee Dashboard

A MERN stack application for managing employee data with a dashboard and employee form.

## Features

- **Employee Dashboard**: Displays employee data from external API (jsonplaceholder.typicode.com/users)
- **Multiple View Modes**: Cards, Table, and List views for the dashboard
- **Employee Form**: Add new employees with Name, Designation, Location, and Salary
- **Responsive Design**: Built with Bootstrap for mobile-friendly interface
- **Navigation**: Easy navigation between Dashboard and Employee Form

## Tech Stack

- **Frontend**: React.js with React Router
- **Backend**: Express.js with Node.js
- **Styling**: Bootstrap 5
- **HTTP Client**: Axios

## Installation

1. Install dependencies for both client and server:
```bash
npm run install-all
```

2. Start the development servers:

### Option 1: Using npm scripts (Recommended)
```bash
npm run dev
```

### Option 2: For Windows users (if npm run dev doesn't work)
```bash
# Run the batch file
start-dev.bat

# Or run PowerShell script
powershell -ExecutionPolicy Bypass -File start-dev.ps1

# Or start servers individually in separate terminals:
npm run start-backend    # Terminal 1
npm run start-frontend   # Terminal 2
```

This will start both the backend server (port 5000) and React development server (port 3000).

## Manual Installation

If you prefer to install dependencies separately:

### Backend Setup
```bash
cd server
npm install
npm run dev
```

### Frontend Setup
```bash
cd client
npm install
npm start
```

## Testing the Setup

To verify everything is working correctly:

```bash
# Start both servers first
npm run dev

# Then in another terminal, run the test
npm run test-setup
```

## Troubleshooting

### Common Issues:

1. **Port already in use**: Make sure ports 3000 and 5000 are available
2. **Dependencies not installed**: Run `npm run install-all`
3. **React Bootstrap errors**: Make sure `react-bootstrap` is installed in client
4. **API connection issues**: Check if backend server is running on port 5000

### Windows-specific Issues:

- Use `start-dev.bat` if `npm run dev` doesn't work
- Run PowerShell as Administrator if you get execution policy errors
- Use `npm run start-backend` and `npm run start-frontend` in separate terminals

### Port Already in Use (EADDRINUSE):

If you get "address already in use" errors:

```bash
# Option 1: Kill existing processes and restart
npm run kill-ports
npm run dev

# Option 2: Clean restart
npm run dev-clean

# Option 3: Manual port cleanup
kill-ports.bat
start-dev.bat
```

**Manual port cleanup:**
```bash
# Find processes using ports 3000 and 5000
netstat -ano | findstr ":3000\|:5000"

# Kill specific process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

## Usage

1. Navigate to `http://localhost:3000` in your browser
2. Use the navigation bar to switch between:
   - **Home/Dashboard**: View employee data in different formats
   - **Employee Form**: Add new employees

## API Endpoints

- `GET /api/users` - Fetch users from external API
- `POST /api/employees` - Add new employee (form data)

## Project Structure

```
EmployeePage/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.js         # Main App component
│   │   └── index.js       # Entry point
│   └── package.json
├── server/                 # Express backend
│   ├── index.js           # Server entry point
│   └── package.json
└── package.json           # Root package.json
```
