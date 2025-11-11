# Quick Start Guide

## Step 1: Add Your Materials

Copy all your Cloud Computing course materials into the `materials/` directory:

### For Weekly Content (Weeks 1-13):

```bash
# Example: Adding Week 1 materials
cp ~/Downloads/Week1Lecture.pdf materials/lectures/week-1/
cp ~/Downloads/Week1Tutorial.pdf materials/tutorials/week-1/
cp ~/Downloads/Week1TutorialAnswers.pdf materials/tutorial-answers/week-1/
cp ~/Downloads/Week1Homework.pdf materials/homework/week-1/
cp ~/Downloads/Week1HomeworkAnswers.pdf materials/homework-answers/week-1/
```

### For Past Papers (Organized by Year 2015-2024):

```bash
# Example: Adding 2024 past papers
cp ~/Downloads/2024-Midterm.pdf materials/past-papers/2024/
cp ~/Downloads/2024-Final-Exam.pdf materials/past-papers/2024/

# Example: Adding 2023 past papers
cp ~/Downloads/2023-Midterm.pdf materials/past-papers/2023/
cp ~/Downloads/2023-Final-Exam.pdf materials/past-papers/2023/

# Add papers for any year from 2015 to 2024
cp ~/Downloads/2022-exam.pdf materials/past-papers/2022/
```

## Step 2: Configure Your AI Assistant

### Option A: VS Code with GitHub Copilot (Recommended)

1. Open VS Code Command Palette:
   - **macOS:** Press `Cmd+Shift+P`
   - **Windows/Linux:** Press `Ctrl+Shift+P`

2. Type and select: **"MCP: Open User Configuration"**

3. Add this server configuration to your `mcp.json`:
   ```json
   {
     "mcpServers": {
       "cloud-computing": {
         "command": "node",
         "args": ["/ABSOLUTE/PATH/TO/Cloud Computing MCP Server/build/index.js"]
       }
     }
   }
   ```
   
   **Important:** Replace `/ABSOLUTE/PATH/TO/` with your actual path!
   
   To find your absolute path, run in this directory:
   ```bash
   pwd
   ```

4. Save the file and restart VS Code or reload GitHub Copilot

**Config file location:**
- **macOS/Linux:** `~/.vscode/mcp.json`
- **Windows:** `%USERPROFILE%\.vscode\mcp.json`

### Option B: Claude Desktop (Alternative)

1. Open Claude Desktop config file:
   ```bash
   # macOS
   open ~/Library/Application\ Support/Claude/claude_desktop_config.json
   
   # Windows
   notepad %APPDATA%\Claude\claude_desktop_config.json
   ```

2. Add the same server configuration (see Option A step 3)

3. Restart Claude Desktop

## Step 3: Start Using It!

Once configured, you can interact with your course materials through natural language:

### Example Queries:

**Search for topics:**
- "Find all materials about Docker containers"
- "Search for information on virtualization"
- "Show me content related to Kubernetes"

**Get week materials:**
- "Get the lecture notes for week 5"
- "Show me the tutorial answers for week 3"
- "I need the homework for week 7"

**Exam preparation:**
- "Help me prepare for my Cloud Computing exam"
- "List all past papers available"
- "Show me past papers from 2023"
- "Get all exam papers from 2024"
- "Quiz me on concepts from weeks 1-5"

**Study assistance:**
- "Explain the concepts from week 4"
- "Summarize the key points from week 8 lecture"
- "What are the main topics I should focus on?"

## Tips for Best Results

1. **Use clear, specific queries:** Instead of "week 1", try "Get the lecture notes for week 1"

2. **Combine tools naturally:** "Search for Docker in week 5 materials and explain the key concepts"

3. **Use the built-in prompts:** Type `/study-week` or `/exam-prep` in Claude for structured assistance

4. **Reference specific materials:** "Based on the week 3 tutorial, explain..."

5. **Ask for summaries:** "Summarize all the key concepts from weeks 1-6"

## Verifying Setup

To verify everything is working:

1. Open your AI assistant (Claude Desktop or VS Code)
2. Ask: "Get an overview of my Cloud Computing course"
3. The AI should list all available materials organized by type

## Common Issues

**Issue:** "No materials found"
- **Solution:** Make sure files are in the correct week folders and rebuild: `npm run build`

**Issue:** "Server not responding"
- **Solution:** Restart your AI assistant and check the path in the config is absolute

**Issue:** "Can't find specific content"
- **Solution:** Make sure the file is a text-based format (MD, TXT) or searchable PDF

## Next Steps

1. ✅ Add all your course materials
2. ✅ Configure your AI assistant  
3. ✅ Start studying with AI-powered assistance!

Happy studying! 🎓
