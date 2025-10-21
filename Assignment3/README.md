# Employee App (Backend + Frontend)

This repository contains a simple MERN-style Employee App. The frontend is pre-built and served from `dist/Frontend`. The backend is implemented in `app.js` and provides CRUD APIs for employee data stored in MongoDB.

## Quick start

1. Install dependencies

```powershell
npm install
```

2. Create a `.env` file at the project root (copy `.env.example` and fill values)

3. Start MongoDB (or use MongoDB Atlas).

4. Start the app

```powershell
npm start
```

Open `http://localhost:3000` in your browser.

## APIs

- `GET /api/employeelist` - Get all employees
- `GET /api/employeelist/:id` - Get a single employee
- `POST /api/employeelist` - Add employee (JSON body: `{name, location, position, salary}`)
- `PUT /api/employeelist` - Update employee (JSON body: `{_id, name, location, position, salary}`)
- `DELETE /api/employeelist/:id` - Delete an employee

## Environment variables
See `.env.example` for required variables. Do NOT commit your real `.env` file.

## Notes
- Frontend build files are located in `dist/Frontend` and must not be modified.
- The app serves the frontend and the APIs from the same server.
