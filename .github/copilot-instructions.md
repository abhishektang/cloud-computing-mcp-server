# Cloud Computing Course MCP Server

This is an MCP server for managing and querying Cloud Computing course materials including:
- Lecture notes (Weeks 1-13)
- Tutorials with answer sheets (Weeks 1-13)
- Homework with answer sheets (Weeks 1-13)
- Past year papers

## Project Type
MCP Server (Model Context Protocol) using TypeScript

## Project Structure
- `src/index.ts` - Main MCP server implementation
- `materials/` - All course materials organized by week and type
- `build/` - Compiled JavaScript output

## Available Tools
1. **search-materials** - Search across all course materials
2. **get-week-materials** - Get all materials for a specific week
3. **list-past-papers** - List all past year exam papers
4. **get-course-overview** - Get overview of available materials

## Available Prompts
1. **study-week** - Guided study for a specific week
2. **exam-prep** - Comprehensive exam preparation

## Resources
- **cloudcomputing://document/{path}** - Direct document access by path

## Usage
Users should add their course materials to the `materials/` directory following the structure:
- `materials/lectures/week-X/` - Lecture notes
- `materials/tutorials/week-X/` - Tutorial questions  
- `materials/tutorial-answers/week-X/` - Tutorial answers
- `materials/homework/week-X/` - Homework assignments
- `materials/homework-answers/week-X/` - Homework answers
- `materials/past-papers/` - Past year papers

After adding materials, rebuild with `npm run build` and configure the server in Claude Desktop or VS Code.
