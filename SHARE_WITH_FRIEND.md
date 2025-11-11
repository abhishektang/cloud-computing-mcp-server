# 🎓 Cloud Computing MCP Server - For Your Friend

Hey! I'm sharing the Cloud Computing MCP Server with you. This tool makes studying Cloud Computing SO much easier by giving you AI-powered access to all course materials.

## 📦 What You're Getting

This zip file contains:
- ✅ **13 weeks** of lecture materials (Introduction, VPC, Docker, Kubernetes, Databases, Spark, Hadoop, Security, etc.)
- ✅ **Tutorial questions + answers** (weeks 2-12)
- ✅ **Homework assignments + solutions** (weeks 2-12)
- ✅ **Past exam papers** (2018-2024) with some solutions
- ✅ **Additional study resources**
- ✅ **MCP Server** that lets you search and access everything with AI

**Total size**: 67 MB

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Extract the Zip

```bash
# Extract to your preferred location
unzip cloud-computing-mcp-server-v1.0.0.zip
cd cloud-computing-mcp-server
```

### Step 2: Install Dependencies

**You need Node.js 17+ first!** Check if you have it:
```bash
node --version
```

If not, download from: https://nodejs.org/

Then install dependencies:
```bash
npm install
```

### Step 3: Configure VS Code

1. Open VS Code
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
3. Type: **"MCP: Open User Configuration"**
4. Add this to your `mcp.json`:

```json
{
  "mcpServers": {
    "cloud-computing": {
      "command": "node",
      "args": ["/FULL/PATH/TO/cloud-computing-mcp-server/build/index.js"]
    }
  }
}
```

**Important**: Replace `/FULL/PATH/TO/` with the actual path!

To find your path:
```bash
pwd  # Run this in the cloud-computing-mcp-server directory
```

### Step 4: Restart & Test

1. Save `mcp.json`
2. Restart VS Code
3. Ask GitHub Copilot: **"List all Cloud Computing course materials"**

---

## 💬 How to Use It

Once set up, you can ask your AI assistant (GitHub Copilot in VS Code):

### Get Materials for a Week
```
"Show me week 5 materials"
"Get the lecture notes for week 3"
"What's in the week 7 tutorial answers?"
```

### Search Across Everything
```
"Search for 'Docker' in all materials"
"Find information about Kubernetes"
"Show me content about load balancing"
```

### Past Exam Papers
```
"List all past exam papers"
"Show me the 2023 exam paper"
"Get past papers from 2024"
```

### Study Help
```
"Help me prepare for the Cloud Computing exam"
"Explain Docker concepts from lecture 3"
"Quiz me on Kubernetes"
"Create a study plan for weeks 8-13"
```

---

## 📚 What's Available

### Lectures (Week 1-13):
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

### Plus:
- Tutorial questions & answers (weeks 2-12)
- Homework assignments & solutions (weeks 2-12)
- Past papers from 2018, 2019, 2020, 2021, 2022, 2023, 2024
- Additional study guides and notes

---

## 🔧 Troubleshooting

### "Command not found" or server not working?

1. **Check Node.js**: Must be version 17+
   ```bash
   node --version
   ```

2. **Verify the path**: In `mcp.json`, use the FULL absolute path
   ```bash
   # Get the full path
   cd cloud-computing-mcp-server
   echo "$(pwd)/build/index.js"
   ```

3. **Reinstall dependencies**:
   ```bash
   npm install
   ```

4. **Restart VS Code**: Fully quit and reopen

### Can't find the MCP config?

```bash
# macOS/Linux
code ~/.vscode/mcp.json

# Windows
code %USERPROFILE%\.vscode\mcp.json

# If file doesn't exist, create it:
mkdir -p ~/.vscode
echo '{"mcpServers":{}}' > ~/.vscode/mcp.json
```

---

## 📖 Detailed Documentation

Inside the folder you'll find:
- **QUICK_SETUP.md** - Fast setup guide with troubleshooting
- **README.md** - Complete documentation
- **QUICKSTART.md** - Getting started guide
- **INSTALL_README.md** - Installation instructions

---

## 💡 Pro Tips

1. **Search is powerful**: "Search for X in all materials" finds topics across 13 weeks
2. **Use specific weeks**: "Show me week 5 materials" works better than vague queries
3. **Past papers are gold**: Review 2-3 years of exams before your test
4. **Ask for explanations**: The AI can explain concepts from the materials
5. **Create study plans**: Ask for help organizing your study schedule

---

## 🎯 Quick Start Checklist

- [ ] Extract the zip file
- [ ] Install Node.js 17+ (if not already installed)
- [ ] Run `npm install` in the project directory
- [ ] Get the full path with `pwd`
- [ ] Open "MCP: Open User Configuration" in VS Code
- [ ] Add the server config with your full path
- [ ] Save and restart VS Code
- [ ] Test with: "List all Cloud Computing materials"

---

## 🙏 Notes

- All materials are from the INFS3208 Cloud Computing course
- Everything stays on your computer (no cloud upload)
- The MCP server just helps you access materials with AI
- Use this responsibly for studying!

---

## 📞 Questions?

If you have any issues setting this up, let me know!

**Happy studying! Good luck on your exam! 🚀**

---

## ⚡ One-Line Install (Alternative)

If you want a super quick setup:

```bash
# Extract, install, and get path in one go
unzip cloud-computing-mcp-server-v1.0.0.zip && \
cd cloud-computing-mcp-server && \
npm install && \
echo "Add this path to your mcp.json: $(pwd)/build/index.js"
```

Then follow Step 3 above to configure VS Code.
