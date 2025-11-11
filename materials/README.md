# Cloud Computing MCP Server Materials

This directory contains all course materials for the Cloud Computing course.

## Directory Structure

```
materials/
├── lectures/           # Lecture notes for weeks 1-13
│   ├── week-1/
│   ├── week-2/
│   └── ...
├── tutorials/          # Tutorial questions for weeks 1-13
│   ├── week-1/
│   ├── week-2/
│   └── ...
├── tutorial-answers/   # Tutorial answer sheets for weeks 1-13
│   ├── week-1/
│   ├── week-2/
│   └── ...
├── homework/           # Homework assignments for weeks 1-13
│   ├── week-1/
│   ├── week-2/
│   └── ...
├── homework-answers/   # Homework answer sheets for weeks 1-13
│   ├── week-1/
│   ├── week-2/
│   └── ...
└── past-papers/        # Past year exam papers (2015-2024)
    ├── 2015/
    ├── 2016/
    ├── ...
    ├── 2023/
    └── 2024/
```

## How to Add Materials

1. **Lecture Notes**: Place lecture materials in `lectures/week-X/` where X is the week number (1-13)
2. **Tutorials**: Place tutorial questions in `tutorials/week-X/`
3. **Tutorial Answers**: Place tutorial answers in `tutorial-answers/week-X/`
4. **Homework**: Place homework assignments in `homework/week-X/`
5. **Homework Answers**: Place homework answers in `homework-answers/week-X/`
6. **Past Papers**: Place past year papers in `past-papers/YEAR/` where YEAR is 2015-2024

## Supported File Formats

- Text files (.txt)
- Markdown files (.md)
- PDF files (.pdf)
- Any other text-based formats

## Example

To add Week 1 lecture notes:
```bash
# Create a markdown file
echo "# Week 1: Introduction to Cloud Computing" > lectures/week-1/lecture-notes.md

# Or copy existing files
cp ~/Downloads/week1-lecture.pdf lectures/week-1/
```

To add past papers:
```bash
# Add 2023 exam papers
cp ~/Downloads/2023-midterm.pdf past-papers/2023/
cp ~/Downloads/2023-final.pdf past-papers/2023/

# Add 2024 exam papers
cp ~/Downloads/2024-midterm.pdf past-papers/2024/
cp ~/Downloads/2024-final.pdf past-papers/2024/
```
