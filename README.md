# Cloud Computing MCP Server

A Model Context Protocol (MCP) server for managing and querying Cloud Computing course materials. This server provides intelligent access to your lecture notes, tutorials, homework, and past papers through AI-powered tools.

## 📚 Features

- **Search Across All Materials**: Full-text search across lectures, tutorials, homework, and past papers
- **Week-Based Organization**: Retrieve all materials for any specific week (1-13)
- **Past Paper Access**: Quick access to all past year exam papers
- **Course Overview**: Get a complete overview of available materials
- **AI-Powered Study Assistant**: Built-in prompts for studying and exam preparation
- **Resource Access**: Direct access to any document by path

## 🚀 Quick Start

### Prerequisites

- Node.js 17 or higher
- npm

### Installation

1. Clone or navigate to this directory
2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

### Adding Your Course Materials

Place your materials in the `materials/` directory following this structure:

```
materials/
├── lectures/week-1/          # Week 1 lecture notes
├── lectures/week-2/          # Week 2 lecture notes
├── ...
├── tutorials/week-1/         # Week 1 tutorial questions
├── tutorial-answers/week-1/  # Week 1 tutorial answers
├── homework/week-1/          # Week 1 homework
├── homework-answers/week-1/  # Week 1 homework answers
└── past-papers/              # Past year papers by year (2015-2024)
    ├── 2015/
    ├── 2016/
    ├── ...
    ├── 2023/
    └── 2024/
```

Supported file formats:
- Markdown (.md)
- Text (.txt)
- PDF (.pdf)
- Any text-based format

### Example: Adding Week 1 Materials

```bash
# Add lecture notes
cp ~/Downloads/week1-lecture.pdf materials/lectures/week-1/

# Add tutorial
cp ~/Downloads/week1-tutorial.md materials/tutorials/week-1/

# Add tutorial answers
cp ~/Downloads/week1-answers.md materials/tutorial-answers/week-1/

# Add past papers by year
cp ~/Downloads/2023-midterm.pdf materials/past-papers/2023/
cp ~/Downloads/2023-final.pdf materials/past-papers/2023/
cp ~/Downloads/2024-exam.pdf materials/past-papers/2024/
```

## 🔧 Using the Server

### With VS Code GitHub Copilot (Recommended)

1. Open VS Code Command Palette (`Cmd+Shift+P` on macOS, `Ctrl+Shift+P` on Windows/Linux)
2. Type and select: **"MCP: Open User Configuration"**
3. Add this configuration to your `mcp.json`:

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

Replace `/ABSOLUTE/PATH/TO/` with the actual path to this directory.

4. Save the file and restart VS Code or GitHub Copilot

**Note**: The MCP configuration file is located at:
- **macOS/Linux**: `~/.vscode/mcp.json`
- **Windows**: `%USERPROFILE%\.vscode\mcp.json`

### With Claude Desktop (Alternative)

If you prefer Claude Desktop, add to `~/Library/Application Support/Claude/claude_desktop_config.json` on macOS:

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

### With MCP Inspector (for testing)

```bash
npx @modelcontextprotocol/inspector node build/index.js
```

## 🛠️ Available Tools

### 1. `search-materials`
Search across all course materials by content or filename.

**Parameters:**
- `query` (string): Search term
- `materialType` (optional): Filter by type (`lectures`, `tutorials`, `tutorialAnswers`, `homework`, `homeworkAnswers`, `pastPapers`, or `all`)

**Example:**
```
Search for "virtualization" in all materials
Search for "docker" in lectures only
```

### 2. `get-week-materials`
Retrieve all materials for a specific week.

**Parameters:**
- `week` (number): Week number (1-13)
- `materialType`: Type of material (`lectures`, `tutorials`, `tutorialAnswers`, `homework`, `homeworkAnswers`)

**Example:**
```
Get lecture notes for week 5
Get tutorial answers for week 3
```

### 3. `list-past-papers`
List all available past year exam papers organized by year (2015-2024).

**Parameters:**
- `year` (optional): Filter by specific year

**Example:**
```
Show me all past papers
List past papers for 2023
```

### 4. `get-year-papers`
Get all past papers for a specific year.

**Parameters:**
- `year` (number): Year to retrieve papers from (2015-2024)

**Example:**
```
Get all papers from 2024
Show me 2023 exam papers
```

### 5. `get-course-overview`
Get an overview of all available course materials.

**Example:**
```
Give me an overview of the course
```

## 💬 Built-in Prompts

### Study for Week
A guided prompt to help you study materials for a specific week.

**Example usage in AI chat:**
```
/study-week week=5 focusArea="containerization"
```

### Exam Preparation
A comprehensive prompt to help you prepare for your exam.

**Example usage in AI chat:**
```
/exam-prep topics="cloud architecture, virtualization, docker"
```

## 📖 Resources

The server also exposes documents as resources that can be directly referenced:

- `cloudcomputing://document/{path}` - Access any document by its relative path

## 🔍 Example Workflows

### Studying for Week 3
1. Ask your AI assistant: "Help me study Week 3"
2. The AI will use `get-week-materials` to retrieve lectures, tutorials, and answers
3. Ask follow-up questions about specific concepts

### Searching for a Topic
1. Ask: "Find all materials about Kubernetes"
2. The AI will use `search-materials` to find relevant content across all weeks
3. Get direct access to the relevant documents

### Exam Preparation
1. Use the `/exam-prep` prompt or ask: "Help me prepare for my Cloud Computing exam"
2. The AI will:
   - List all past papers
   - Search for key concepts
   - Help you practice questions
   - Create a study plan

## 🏗️ Development

### Project Structure

```
.
├── src/
│   └── index.ts          # Main MCP server implementation
├── materials/            # Your course materials
│   ├── lectures/
│   ├── tutorials/
│   ├── tutorial-answers/
│   ├── homework/
│   ├── homework-answers/
│   └── past-papers/
├── build/                # Compiled JavaScript (generated)
├── package.json
├── tsconfig.json
└── README.md
```

### Making Changes

1. Edit `src/index.ts`
2. Rebuild: `npm run build`
3. Restart your MCP client to pick up changes

### Watch Mode (for development)

```bash
npm run dev
```

This will automatically rebuild when you make changes to the source code.

## 🎓 Tips for Exam Preparation

1. **Organize Your Materials**: Keep materials organized by week for easy retrieval
2. **Use Descriptive Filenames**: Name files clearly (e.g., `week3-docker-containers.md`)
3. **Combine with AI**: Ask the AI to quiz you, explain concepts, or create study guides
4. **Search Effectively**: Use specific terms to find relevant materials across all weeks
5. **Practice with Past Papers**: Use the `list-past-papers` tool to access previous exams

## 🔒 Privacy

All materials are stored locally on your machine. The MCP server only provides access to your AI assistant through the Model Context Protocol. Your course materials never leave your computer.

## 📝 License

MIT

## 📦 Distribution

To create a distribution package for sharing:

```bash
# Create npm package
npm pack

# This creates cloud-computing-mcp-server-1.0.0.tgz
# Share this file with others who can install it with:
# npm install -g cloud-computing-mcp-server-1.0.0.tgz
```

## 🤝 Contributing

This is a personal study tool, but feel free to customize it for your own needs!

## 🆘 Troubleshooting

### Server won't start
- Make sure you've run `npm install` and `npm run build`
- Check that Node.js version is 17 or higher: `node --version`

### Materials not showing up
- Verify files are in the correct directory structure
- Check file permissions (files must be readable)
- Try using the `get-course-overview` tool to see what's detected

### Search not finding content
- Ensure files are text-based (not binary PDFs without text layer)
- Check file encoding (should be UTF-8)
- Try searching for exact words from the document

## 📚 Example Materials Template

See `materials/lectures/week-1/lecture-notes.md` for a template of how to structure your content.

---

**Happy Studying! 🎓** Use this tool to ace your Cloud Computing exam!
