@echo off
echo Starting Employee Dashboard Development Servers...
echo.

echo Starting Backend Server...
start "Backend Server" cmd /k "cd server && npm run dev"

echo Starting Frontend Server...
start "Frontend Server" cmd /k "cd client && npm start"

echo.
echo Both servers are starting...
echo Backend will be available at: http://localhost:5000
echo Frontend will be available at: http://localhost:3000
echo.
pause
