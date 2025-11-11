# 🚀 Quick Setup Guide - Cloud Computing MCP Server

## Step 1: Install the Package

```bash
# Option A: Using install script
chmod +x install.sh
./install.sh

# Option B: Manual install
npm install -g cloud-computing-mcp-server-1.0.0.tgz
```

---

## Step 2: Configure VS Code (Recommended)

### Using Command Palette:

1. Open VS Code
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
3. Type: **"MCP: Open User Configuration"**
4. Select it to open your `mcp.json` file

### Add This Configuration:

```json
{
  "mcpServers": {
    "cloud-computing": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/cloud-computing-mcp-server/build/index.js"]
    }
  }
}
```

**Important**: Replace `/ABSOLUTE/PATH/TO/` with your actual installation path!

### Find Your Installation Path:

```bash
# For global install:
npm root -g

# Then your path is:
# /path/from/npm-root/cloud-computing-mcp-server/build/index.js

# For local install:
pwd  # Run this in the package directory
```

### Config File Location:
- **macOS/Linux**: `~/.vscode/mcp.json`
- **Windows**: `%USERPROFILE%\.vscode\mcp.json`

---

## Step 3: Restart & Test

1. **Save** your `mcp.json` file
2. **Restart** VS Code or reload GitHub Copilot
3. **Test** by asking Copilot:
   ```
   "List all available Cloud Computing course materials"
   "Show me week 1 lecture"
   "Search for Docker in all materials"
   ```

---

## 📋 Quick Commands

Ask your AI assistant:

### View Materials
```
"Show me week 5 materials"
"Get lecture notes for week 3"
"What's in the week 7 tutorial?"
```

### Search
```
"Search for 'Kubernetes' in all materials"
"Find information about load balancing"
"Show me content about Docker Swarm"
```

### Past Papers
```
"List all past exam papers"
"Show me the 2023 exam"
"Get past papers from 2024"
```

### Study Help
```
"Help me study for week 8"
"Explain Docker concepts from lecture 3"
"Create a study plan for the final exam"
```

---

## 🔧 Troubleshooting

### MCP Server Not Showing Up?

1. **Check Node.js version**: `node --version` (must be 17+)
2. **Verify path**: Make sure the path in `mcp.json` is correct
3. **Check JSON syntax**: Use a JSON validator
4. **Restart VS Code**: Fully quit and reopen

### Can't Find Config File?

```bash
# Open directly:
code ~/.vscode/mcp.json

# Or create if missing:
mkdir -p ~/.vscode
echo '{"mcpServers":{}}' > ~/.vscode/mcp.json
```

### Find Installation Path:

```bash
# Global install:
echo "$(npm root -g)/cloud-computing-mcp-server/build/index.js"

# Local install:
echo "$(pwd)/build/index.js"
```

---

## ✅ Success Checklist

- [ ] Node.js 17+ installed
- [ ] Package installed (via npm or script)
- [ ] Found installation path
- [ ] Opened `mcp.json` via "MCP: Open User Configuration"
- [ ] Added server configuration with correct path
- [ ] Saved `mcp.json`
- [ ] Restarted VS Code
- [ ] Tested with a simple query

---

## 📚 What's Available?

- **13 weeks** of lecture materials
- **11 weeks** of tutorials with answers
- **10 weeks** of homework with solutions
- **7 years** of past papers (2018-2024)
- Additional study resources

---

## 💡 Pro Tips

1. **Use specific weeks**: "Show me week 5 materials" is better than "show me materials"
2. **Search across all**: "Search for X in all materials" finds topics anywhere
3. **Past papers are gold**: Review 2-3 years of exams before your test
4. **Ask for explanations**: "Explain Docker from lecture 3" works great
5. **Study progressively**: Review materials week by week

---

## 📞 Need Help?

If you're stuck:
1. Check this guide again
2. Verify your `mcp.json` syntax
3. Make sure the path is absolute (starts with `/`)
4. Try reinstalling: `npm install -g cloud-computing-mcp-server-1.0.0.tgz`

---

**You're all set! Start studying with AI-powered assistance! 🎓**
