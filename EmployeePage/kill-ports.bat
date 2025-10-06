@echo off
echo Killing processes on ports 3000 and 5000...

echo Checking port 3000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do (
    echo Killing process %%a on port 3000
    taskkill /PID %%a /F >nul 2>&1
)

echo Checking port 5000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5000') do (
    echo Killing process %%a on port 5000
    taskkill /PID %%a /F >nul 2>&1
)

echo Ports cleared. You can now start the servers.
pause
