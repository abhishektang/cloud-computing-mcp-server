# 📋 Setup Checklist

Follow these steps to get your Cloud Computing MCP server up and running!

## ✅ Phase 1: Initial Setup (Already Complete!)

- [x] Project structure created
- [x] TypeScript server implemented
- [x] Dependencies installed
- [x] Project built successfully
- [x] Materials directory structure created
- [x] Documentation written

## 📝 Phase 2: Add Your Materials (Do This Next!)

### Week-by-Week Materials
For each week (1-13), add files to these folders:

- [ ] Week 1 - `materials/lectures/week-1/`
- [ ] Week 2 - `materials/lectures/week-2/`
- [ ] Week 3 - `materials/lectures/week-3/`
- [ ] Week 4 - `materials/lectures/week-4/`
- [ ] Week 5 - `materials/lectures/week-5/`
- [ ] Week 6 - `materials/lectures/week-6/`
- [ ] Week 7 - `materials/lectures/week-7/`
- [ ] Week 8 - `materials/lectures/week-8/`
- [ ] Week 9 - `materials/lectures/week-9/`
- [ ] Week 10 - `materials/lectures/week-10/`
- [ ] Week 11 - `materials/lectures/week-11/`
- [ ] Week 12 - `materials/lectures/week-12/`
- [ ] Week 13 - `materials/lectures/week-13/`

### Tutorials and Answers
- [ ] Add all tutorial questions to `materials/tutorials/week-X/`
- [ ] Add all tutorial answers to `materials/tutorial-answers/week-X/`

### Homework and Answers
- [ ] Add all homework to `materials/homework/week-X/`
- [ ] Add all homework answers to `materials/homework-answers/week-X/`

### Past Papers (By Year 2015-2024)
- [ ] Add 2015 papers to `materials/past-papers/2015/`
- [ ] Add 2016 papers to `materials/past-papers/2016/`
- [ ] Add 2017 papers to `materials/past-papers/2017/`
- [ ] Add 2018 papers to `materials/past-papers/2018/`
- [ ] Add 2019 papers to `materials/past-papers/2019/`
- [ ] Add 2020 papers to `materials/past-papers/2020/`
- [ ] Add 2021 papers to `materials/past-papers/2021/`
- [ ] Add 2022 papers to `materials/past-papers/2022/`
- [ ] Add 2023 papers to `materials/past-papers/2023/`
- [ ] Add 2024 papers to `materials/past-papers/2024/`

### Quick Add Commands
```bash
# Example: Bulk add Week 1 files
cp ~/Downloads/Week1/* materials/lectures/week-1/
cp ~/Downloads/Week1-Tutorial.pdf materials/tutorials/week-1/

# Example: Add past papers by year
cp ~/Downloads/2024-Midterm.pdf materials/past-papers/2024/
cp ~/Downloads/2024-Final.pdf materials/past-papers/2024/
cp ~/Downloads/2023-*.pdf materials/past-papers/2023/
```

## ⚙️ Phase 3: Configure AI Assistant

### Option A: Claude Desktop
- [ ] Open Claude config file:
  ```bash
  # macOS
  code ~/Library/Application\ Support/Claude/claude_desktop_config.json
  ```
  
- [ ] Get absolute path:
  ```bash
  cd /Users/abhishektanguturi/Cloud\ Computing\ MCP\ Server
  pwd
  ```
  
- [ ] Add configuration:
  ```json
  {
    "mcpServers": {
      "cloud-computing": {
        "command": "node",
        "args": ["YOUR_ABSOLUTE_PATH_HERE/build/index.js"]
      }
    }
  }
  ```
  
- [ ] Restart Claude Desktop

### Option B: VS Code
- [ ] Configuration already exists in `.vscode/mcp.json`
- [ ] Just restart VS Code
- [ ] Open GitHub Copilot chat

## 🧪 Phase 4: Test Your Setup

Once configured, test with these queries:

- [ ] Test 1: "Get an overview of my Cloud Computing course"
  - Expected: List of available materials by type
  
- [ ] Test 2: "Search for [topic] in all materials"
  - Expected: Search results with excerpts
  
- [ ] Test 3: "Get lecture notes for week 1"
  - Expected: Week 1 lecture content
  
- [ ] Test 4: "List all past papers"
  - Expected: List of past papers organized by year
  
- [ ] Test 4b: "Get all papers from 2024"
  - Expected: All papers from the 2024 folder
  
- [ ] Test 5: "Help me study week [X]"
  - Expected: Guided study assistance

## 🎯 Phase 5: Start Studying!

You're ready when you can:
- [ ] Ask about any week's content
- [ ] Search for specific topics
- [ ] Get help with difficult concepts
- [ ] Access past papers
- [ ] Get exam preparation guidance

## 📚 Useful Commands Reference

```bash
# Navigate to project
cd "/Users/abhishektanguturi/Cloud Computing MCP Server"

# Add materials
cp SOURCE_FILE materials/TYPE/week-X/

# Rebuild after adding files (if needed)
npm run build

# Test the server
npx @modelcontextprotocol/inspector node build/index.js
```

## 💡 Pro Tips

1. **Organize First**: Add all materials before starting to study
2. **Clear Names**: Use descriptive filenames like "week3-docker-lecture.pdf"
3. **Test Early**: Verify setup works before exam crunch time
4. **Natural Language**: Ask questions naturally, the AI understands context
5. **Combine Tools**: "Search X and explain using week Y materials"

## 🆘 Having Issues?

| Issue | Solution |
|-------|----------|
| Materials not found | Check files are in correct folders, rebuild with `npm run build` |
| Server won't connect | Verify absolute path in config, restart AI assistant |
| Search not working | Ensure text-based files (PDF with text layer, not scanned images) |
| Can't find config | macOS: `~/Library/Application Support/Claude/claude_desktop_config.json` |

## 📖 Documentation Quick Links

- **Full docs**: [README.md](README.md)
- **Quick start**: [QUICKSTART.md](QUICKSTART.md)
- **Setup summary**: [SETUP_SUMMARY.md](SETUP_SUMMARY.md)
- **This checklist**: [CHECKLIST.md](CHECKLIST.md)

---

## ✨ Current Status

**Your MCP server is built and ready!**

**Next step**: Add your course materials to the `materials/` folder, then configure Claude Desktop or VS Code.

**Goal**: Have an AI-powered study assistant for your Cloud Computing exam! 🎓

Good luck! 🚀
