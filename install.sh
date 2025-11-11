#!/bin/bash

# Cloud Computing MCP Server - Installation Script
# This script helps users install and configure the MCP server

set -e  # Exit on error

echo "🎓 Cloud Computing MCP Server - Installation"
echo "==========================================="
echo ""

# Check Node.js version
echo "📋 Checking prerequisites..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js 17+ from https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 17 ]; then
    echo "⚠️  Node.js version 17+ required (you have v$NODE_VERSION)"
    echo "Please upgrade Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Check if package file exists
PACKAGE_FILE="cloud-computing-mcp-server-1.0.0.tgz"
if [ ! -f "$PACKAGE_FILE" ]; then
    echo "❌ Package file not found: $PACKAGE_FILE"
    echo "Please make sure $PACKAGE_FILE is in the current directory"
    exit 1
fi

echo "📦 Found package: $PACKAGE_FILE"
echo ""

# Ask for installation type
echo "Choose installation type:"
echo "1) Global installation (recommended - accessible everywhere)"
echo "2) Local installation (current directory only)"
read -p "Enter choice (1 or 2): " INSTALL_TYPE

if [ "$INSTALL_TYPE" = "1" ]; then
    echo ""
    echo "🚀 Installing globally..."
    npm install -g "$PACKAGE_FILE"
    INSTALL_PATH=$(npm root -g)/cloud-computing-mcp-server
elif [ "$INSTALL_TYPE" = "2" ]; then
    echo ""
    echo "🚀 Installing locally..."
    tar -xzf "$PACKAGE_FILE"
    cd package
    npm install
    INSTALL_PATH=$(pwd)
else
    echo "Invalid choice. Exiting."
    exit 1
fi

echo ""
echo "✅ Installation complete!"
echo ""

# Display configuration instructions
echo "📝 Configuration Instructions"
echo "=============================="
echo ""
echo "To use with VS Code GitHub Copilot:"
echo "1. Open VS Code Command Palette (Cmd+Shift+P or Ctrl+Shift+P)"
echo "2. Type and select: 'MCP: Open User Configuration'"
echo "3. Add this configuration to your mcp.json:"
echo ""
echo '{'
echo '  "mcpServers": {'
echo '    "cloud-computing": {'
echo '      "command": "node",'
echo '      "args": ["'$INSTALL_PATH'/build/index.js"]'
echo '    }'
echo '  }'
echo '}'
echo ""
echo "4. Save the file and restart VS Code or GitHub Copilot"
echo ""
echo "MCP config file location:"
echo "  • macOS/Linux: ~/.vscode/mcp.json"
echo "  • Windows: %USERPROFILE%\.vscode\mcp.json"
echo ""
echo "Alternatively, for Claude Desktop:"
echo "  Edit: ~/Library/Application Support/Claude/claude_desktop_config.json"
echo "  (Use the same configuration format above)"
echo ""

echo ""
echo "📚 Quick Start Commands"
echo "======================="
echo ""
echo "Ask your AI assistant:"
echo '  • "Show me week 5 lecture materials"'
echo '  • "Search for Docker in all materials"'
echo '  • "List all past exam papers"'
echo '  • "Help me study for the Cloud Computing exam"'
echo ""
echo "For more information, see README.md"
echo ""
echo "🎉 Setup complete! Happy studying!"
