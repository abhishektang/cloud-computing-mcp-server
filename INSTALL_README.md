# 🎓 Cloud Computing MCP Server - Distribution Package

## 📦 What's in this Package?

This is an MCP (Model Context Protocol) server that provides AI-powered access to Cloud Computing course materials including:

- ✅ **13 weeks of lectures** (Introduction to Cloud, VPC, Docker, Kubernetes, Databases, Spark, Hadoop, Security, and more)
- ✅ **Tutorial questions and answers** (Weeks 2-12)
- ✅ **Homework assignments and solutions** (Weeks 2-12)  
- ✅ **Past exam papers** (2018-2024)
- ✅ **Additional study resources**

## 🚀 Quick Install

### Automatic Installation (Recommended)

```bash
# Make install script executable
chmod +x install.sh

# Run installation
./install.sh
```

The script will:
1. Check Node.js version
2. Install the package
3. Help configure Claude Desktop or VS Code

### Manual Installation

```bash
# Extract package
tar -xzf cloud-computing-mcp-server-1.0.0.tgz
cd package

# Install dependencies
npm install

# Note the installation path
pwd
```

## ⚙️ Configuration

### For VS Code GitHub Copilot (Recommended)

1. Open VS Code Command Palette:
   - **macOS**: Press `Cmd+Shift+P`
   - **Windows/Linux**: Press `Ctrl+Shift+P`

2. Type and select: **"MCP: Open User Configuration"**

3. Add this configuration to your `mcp.json`:

```json
{
  "mcpServers": {
    "cloud-computing": {
      "command": "node",
      "args": ["/absolute/path/to/package/build/index.js"]
    }
  }
}
```

4. Save the file and restart VS Code or GitHub Copilot

**Config file location:**
- **macOS/Linux**: `~/.vscode/mcp.json`
- **Windows**: `%USERPROFILE%\.vscode\mcp.json`

### For Claude Desktop (Alternative)

Edit: `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "cloud-computing": {
      "command": "node",
      "args": ["/absolute/path/to/package/build/index.js"]
    }
  }
}
```

Then restart Claude Desktop.

**Important**: Replace `/absolute/path/to/package/` with your actual installation path!

## 🎯 How to Use

Once configured, ask your AI assistant:

### Study for a Specific Week
```
"Show me all materials for week 5"
"What's covered in week 3 lecture?"
"Give me tutorial answers for week 7"
```

### Search Materials
```
"Search for 'Docker' in all materials"
"Find information about Kubernetes"
"Show me content about load balancing"
```

### Past Papers
```
"List all past exam papers"
"Show me the 2023 exam paper"
"What questions were in the 2022 exam?"
```

### Exam Preparation
```
"Help me prepare for the Cloud Computing exam"
"Create a study plan for weeks 8-13"
"Quiz me on Docker concepts"
```

## 📋 Requirements

- **Node.js**: Version 17.0.0 or higher
- **npm**: Comes with Node.js
- **AI Assistant**: Claude Desktop or VS Code with GitHub Copilot

Check your Node.js version:
```bash
node --version
```

If you need to install/upgrade Node.js: https://nodejs.org/

## 🔧 Troubleshooting

### "Command not found" error

If you get this error, use the full path in your config:

```bash
# Find the package location
npm root -g  # for global install
pwd          # for local install

# Use that path + /build/index.js in your config
```

### Server not responding

1. Verify Node.js is installed: `node --version`
2. Check config file is valid JSON
3. Restart Claude Desktop or VS Code
4. Check the path to build/index.js is correct

### "Cannot find module" error

Navigate to the package directory and reinstall:
```bash
cd /path/to/cloud-computing-mcp-server
npm install
```

## 📚 Available Tools

The server provides these tools to your AI assistant:

1. **search-materials** - Search all materials by keyword
2. **get-week-materials** - Get materials for specific week
3. **list-past-papers** - List all past papers
4. **get-year-papers** - Get papers from specific year
5. **get-course-overview** - Overview of all materials

## 🌟 Features

- **Fast Search**: Quickly find any topic across all materials
- **Organized Access**: Materials organized by week
- **Complete Coverage**: Lectures, tutorials, homework, and exams
- **AI-Powered**: Works seamlessly with your AI assistant
- **Local Storage**: All materials stay on your computer

## 📖 Documentation

- **README.md** - Full documentation
- **QUICKSTART.md** - Quick start guide
- **SHARING_GUIDE.md** - How to share with others
- **DISTRIBUTION.md** - Packaging and distribution guide

## 🎓 Course Coverage

### Weeks 1-13 Topics:
1. Introduction to Cloud Computing
2. VPC Network and Load Balancing
3. Docker Part I
4. Docker Part II (Compose & Swarm)
5. Kubernetes
6. Databases in Cloud Computing
7. Vector Databases
8. Spark Framework
9. Spark RDD Programming
10. Distributed File Systems
11. Hadoop MapReduce
12. Security and Privacy
13. Course Revision

## 💡 Tips for Success

1. **Regular Study**: Use the server to review materials weekly
2. **Practice Past Papers**: Work through previous exams
3. **Ask Questions**: Use AI to explain difficult concepts
4. **Search Often**: Find related topics across different weeks
5. **Take Notes**: Combine server materials with your own notes

## 🤝 Sharing

Want to share with classmates? See `SHARING_GUIDE.md` for instructions.

## 📞 Support

If you encounter issues:
1. Check Node.js version is 17+
2. Verify config file syntax
3. Try reinstalling dependencies
4. Restart your AI assistant

## 📜 License

MIT License - Free to use, modify, and share!

## 🙏 Acknowledgments

This MCP server helps students access and study Cloud Computing materials more effectively using AI assistance.

---

**Happy Studying! Good luck on your exam! 🚀**

For detailed usage examples and advanced features, see the full README.md file.
