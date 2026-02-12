#!/bin/bash

# ZENTALLAX Installation & Setup Script for macOS/Linux

echo ""
echo "╔════════════════════════════════════════════╗"
echo "║     ZENTALLAX Setup & Installation         ║"
echo "║   Industrial Solutions Platform v1.0       ║"
echo "╚════════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo ""
    echo "📥 Please download and install Node.js from:"
    echo "   https://nodejs.org/ (Choose LTS version)"
    echo ""
    echo "Or install via Homebrew (macOS):"
    echo "   brew install node"
    echo ""
    exit 1
fi

# Get Node version
NODE_VERSION=$(node --version)
echo "✅ Node.js Found: $NODE_VERSION"

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    exit 1
fi

NPM_VERSION=$(npm --version)
echo "✅ npm Found: $NPM_VERSION"

echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Installation failed!"
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"
echo ""
echo "🚀 Starting ZENTALLAX Server..."
echo ""
echo "Server will run on: http://localhost:3000"
echo "Frontend: Open index.html in your browser"
echo ""

npm start
