@echo off
chcp 65001 >nul
title DZX Universal Website
color 0A
cls

echo.
echo ========================================
echo   🚀 DZX Universal Website Launcher
echo ========================================
echo.

:: Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ ERROR: Node.js is not installed!
    echo.
    echo 📥 Please install Node.js from:
    echo    https://nodejs.org/
    echo.
    echo 💡 Download the LTS version (recommended)
    echo.
    pause
    exit /b 1
)

:: Get Node.js version
for /f "tokens=*" %%i in ('node --version') do set "node_version=%%i"
echo ✅ Node.js %node_version% detected

echo.
echo 📁 Starting server at 127.0.0.1:2050...
echo 🌐 Website will open automatically...
echo.
echo 💡 Press Ctrl+C in this window to stop server
echo ========================================
echo.

:: Start server
node server.js

if errorlevel 1 (
    echo.
    echo ❌ Server failed to start!
    echo.
    echo 🔧 Possible issues:
    echo    • Port 2050 is already in use
    echo    • Missing server.js file
    echo    • File permissions
    echo.
    pause
    exit /b 1
)

pause