@echo off
REM ZENTALLAX Installation & Setup Script

echo.
echo ╔════════════════════════════════════════════╗
echo ║     ZENTALLAX Setup & Installation         ║
echo ║   Industrial Solutions Platform v1.0       ║
echo ╚════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo.
    echo 📥 Please download and install Node.js from:
    echo    https://nodejs.org/ (Choose LTS version)
    echo.
    echo After installation, restart PowerShell and run this script again.
    pause
    exit /b 1
)

REM Get Node version
for /f "tokens=*" %%A in ('node --version') do set NODE_VERSION=%%A
echo ✅ Node.js Found: %NODE_VERSION%

REM Check npm
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed!
    pause
    exit /b 1
)

for /f "tokens=*" %%A in ('npm --version') do set NPM_VERSION=%%A
echo ✅ npm Found: %NPM_VERSION%

echo.
echo 📦 Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ❌ Installation failed!
    pause
    exit /b 1
)

echo.
echo ✅ Dependencies installed successfully!
echo.
echo 🚀 Starting ZENTALLAX Server...
echo.
echo Server will run on: http://localhost:3000
echo Frontend: Open index.html in your browser
echo.
pause
echo.

call npm start

pause
