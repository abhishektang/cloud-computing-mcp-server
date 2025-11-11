# Distribution Guide for Cloud Computing MCP Server

This guide explains how to package and share your Cloud Computing MCP server with others.

## 📦 Packaging Options

### Option 1: NPM Package (Recommended for Public Sharing)

If you want to publish to npm for easy installation:

1. **Create an npm account** (if you don't have one):
   ```bash
   npm adduser
   ```

2. **Update package.json**:
   - Add your name as author
   - Update repository URL
   - Choose a unique package name (check availability: `npm search cloud-computing-mcp`)

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Test locally before publishing**:
   ```bash
   npm pack
   ```
   This creates a `.tgz` file you can test by installing locally:
   ```bash
   npm install -g cloud-computing-mcp-server-1.0.0.tgz
   ```

5. **Publish to npm**:
   ```bash
   npm publish
   ```

6. **Others can install with**:
   ```bash
   npm install -g cloud-computing-mcp-server
   ```

### Option 2: GitHub Repository (Recommended for Version Control)

1. **Initialize git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Cloud Computing MCP Server"
   ```

2. **Create GitHub repository**:
   - Go to github.com and create a new repository
   - Name it: `cloud-computing-mcp-server`

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/yourusername/cloud-computing-mcp-server.git
   git branch -M main
   git push -u origin main
   ```

4. **Others can install directly from GitHub**:
   ```bash
   npm install -g https://github.com/yourusername/cloud-computing-mcp-server.git
   ```

### Option 3: Zip File (Simple Sharing)

For sharing with classmates or friends:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Create distribution folder**:
   ```bash
   mkdir cloud-computing-mcp-dist
   cp -r build materials package.json package-lock.json README.md QUICKSTART.md cloud-computing-mcp-dist/
   ```

3. **Create zip file**:
   ```bash
   zip -r cloud-computing-mcp-server.zip cloud-computing-mcp-dist/
   ```

4. **Share the zip file** via:
   - Google Drive
   - Dropbox
   - Email
   - Cloud storage

5. **Installation instructions for recipients**:
   ```bash
   # Unzip
   unzip cloud-computing-mcp-server.zip
   cd cloud-computing-mcp-dist
   
   # Install dependencies
   npm install
   
   # Use the server
   node build/index.js
   ```

### Option 4: Docker Container (Advanced)

Package as a Docker container for maximum portability:

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:20-alpine
   
   WORKDIR /app
   
   COPY package*.json ./
   RUN npm ci --only=production
   
   COPY build ./build
   COPY materials ./materials
   
   ENTRYPOINT ["node", "build/index.js"]
   ```

2. **Build Docker image**:
   ```bash
   docker build -t cloud-computing-mcp-server:1.0.0 .
   ```

3. **Run container**:
   ```bash
   docker run -i cloud-computing-mcp-server:1.0.0
   ```

4. **Share via Docker Hub**:
   ```bash
   docker tag cloud-computing-mcp-server:1.0.0 yourusername/cloud-computing-mcp-server:1.0.0
   docker push yourusername/cloud-computing-mcp-server:1.0.0
   ```

## 📋 Pre-Distribution Checklist

Before sharing, ensure:

- [ ] Code is built: `npm run build`
- [ ] All dependencies are in package.json
- [ ] README.md is comprehensive
- [ ] Example materials are included (or instructions to add them)
- [ ] Personal/sensitive information is removed
- [ ] License is specified (MIT recommended)
- [ ] Version number is correct
- [ ] Test installation on a clean machine/environment

## 🔍 What Gets Included

When you package, these files are included:

✅ **Included:**
- `build/` - Compiled JavaScript
- `materials/` - Your course materials
- `package.json` - Dependencies and metadata
- `README.md` - Documentation
- `QUICKSTART.md` - Quick start guide

❌ **Excluded:**
- `node_modules/` - Will be installed by user
- `src/` - TypeScript source (build output is enough)
- `.git/` - Git history
- Development files (.vscode/, .github/)
- Log files

## 🎯 Installation Instructions for Users

Share these instructions with users:

### Via npm (if published):
```bash
npm install -g cloud-computing-mcp-server
```

### Via GitHub:
```bash
npm install -g https://github.com/yourusername/cloud-computing-mcp-server.git
```

### Manual Installation:
```bash
# Extract/clone the package
cd cloud-computing-mcp-server

# Install dependencies
npm install

# Add to Claude Desktop config
# Edit: ~/Library/Application Support/Claude/claude_desktop_config.json
{
  "mcpServers": {
    "cloud-computing": {
      "command": "node",
      "args": ["/absolute/path/to/cloud-computing-mcp-server/build/index.js"]
    }
  }
}
```

## 🛠️ Customization Guide for Users

Tell users they can customize by:

1. **Adding their own materials**:
   - Place files in `materials/` folder
   - Follow the week structure (week-1, week-2, etc.)
   - Supported formats: PDF, MD, TXT

2. **Modifying for different courses**:
   - Update `materials/` structure
   - Edit `README.md` to match their course
   - Change package name in `package.json`

## 🔐 Security Considerations

- **Remove sensitive data**: Exam answers, personal notes, copyrighted material
- **Check licenses**: Ensure you have rights to share course materials
- **Privacy**: Don't include personal information
- **Credentials**: Never include API keys or passwords

## 📊 Version Management

Use semantic versioning:
- **1.0.0**: Initial release
- **1.0.x**: Bug fixes
- **1.x.0**: New features (backward compatible)
- **x.0.0**: Breaking changes

Update version in package.json:
```bash
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.1 -> 1.1.0
npm version major  # 1.1.0 -> 2.0.0
```

## 📝 Creating Releases (GitHub)

1. Tag your version:
   ```bash
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```

2. Create release on GitHub:
   - Go to repository → Releases → Create new release
   - Select tag v1.0.0
   - Add release notes
   - Attach zip file (optional)

## 🤝 Sharing Best Practices

1. **Provide clear documentation**: Include setup steps
2. **Include example materials**: Show the expected structure
3. **Test before sharing**: Install on fresh environment
4. **Gather feedback**: Ask users about issues
5. **Maintain**: Fix bugs and add features based on feedback
6. **License properly**: Use open-source licenses (MIT recommended)

## 💡 Promotion Ideas

- Share on university forum/Discord
- Post on Reddit (r/cloudcomputing, r/learnprogramming)
- Write a blog post about your MCP server
- Present in class or study group
- Add to awesome-mcp-servers list on GitHub

## 🆘 Support

When sharing, provide support channels:
- GitHub Issues (if on GitHub)
- Email
- Discord/Slack channel
- University forum

---

**Ready to share your Cloud Computing MCP Server with the world! 🚀**
