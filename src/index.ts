#!/usr/bin/env node

import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { readdir, readFile, stat } from 'fs/promises';
import { join, relative, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// @ts-ignore - pdf-parse-fork doesn't have type definitions
import pdfParse from 'pdf-parse-fork';
// @ts-ignore - officeparser doesn't have type definitions
import { parseOfficeAsync } from 'officeparser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the materials directory
const MATERIALS_DIR = join(__dirname, '..', 'materials');

// Material types and their directories
const MATERIAL_TYPES = {
  lectures: 'lectures',
  tutorials: 'tutorials',
  tutorialAnswers: 'tutorial-answers',
  homework: 'homework',
  homeworkAnswers: 'homework-answers',
  pastPapers: 'past-papers'
} as const;

interface FileInfo {
  path: string;
  name: string;
  type: string;
  week?: number;
  content?: string;
}

/**
 * Extract text content from various document types
 */
async function extractDocumentText(filePath: string, fileType: string): Promise<string> {
  try {
    const ext = fileType.toLowerCase();
    
    // Handle PDF files with pdf-parse-fork
    if (ext === '.pdf') {
      const buffer = await readFile(filePath);
      const data = await pdfParse(buffer);
      return data.text || '';
    }
    
    // Use officeparser for DOCX and PPTX files
    if (ext === '.docx' || ext === '.pptx') {
      const text = await parseOfficeAsync(filePath);
      return text || '';
    }
    
    // For text files, read directly
    if (ext === '.txt' || ext === '.md') {
      const buffer = await readFile(filePath);
      return buffer.toString('utf-8');
    }
    
    // For other file types, try to read as text
    const buffer = await readFile(filePath);
    return buffer.toString('utf-8');
  } catch (err) {
    console.error(`Error extracting text from ${filePath}:`, err);
    return '';
  }
}

/**
 * Recursively search for files in a directory
 */
async function searchFiles(dir: string, query: string): Promise<FileInfo[]> {
  const results: FileInfo[] = [];
  
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      
      if (entry.isDirectory()) {
        const subResults = await searchFiles(fullPath, query);
        results.push(...subResults);
      } else if (entry.isFile()) {
        const ext = extname(entry.name).toLowerCase();
        const relativePath = relative(MATERIALS_DIR, fullPath);
        
        // Check if filename matches query
        if (entry.name.toLowerCase().includes(query.toLowerCase())) {
          // Extract text content for supported file types
          const content = await extractDocumentText(fullPath, ext);
          const excerpt = content.slice(0, 500); // First 500 characters as excerpt
          
          results.push({
            path: relativePath,
            name: entry.name,
            type: ext,
            content: excerpt
          });
        } else {
          // Check if file content matches query
          const supportedTypes = ['.txt', '.md', '.pdf', '.docx', '.pptx'];
          if (supportedTypes.includes(ext)) {
            try {
              const content = await extractDocumentText(fullPath, ext);
              if (content.toLowerCase().includes(query.toLowerCase())) {
                const excerpt = content.slice(0, 500); // First 500 characters as excerpt
                
                results.push({
                  path: relativePath,
                  name: entry.name,
                  type: ext,
                  content: excerpt
                });
              }
            } catch (err) {
              // Skip files that can't be processed
              console.error(`Error processing ${fullPath}:`, err);
            }
          }
        }
      }
    }
  } catch (err) {
    console.error(`Error searching directory ${dir}:`, err);
  }
  
  return results;
}

/**
 * Get files for a specific week and type
 */
async function getWeekMaterials(week: number, type: keyof typeof MATERIAL_TYPES): Promise<FileInfo[]> {
  const dir = join(MATERIALS_DIR, MATERIAL_TYPES[type], `week-${week}`);
  const results: FileInfo[] = [];
  
  try {
    const stats = await stat(dir);
    if (!stats.isDirectory()) {
      return results;
    }
    
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isFile()) {
        const fullPath = join(dir, entry.name);
        const ext = extname(entry.name).toLowerCase();
        
        // Extract text content from documents
        const content = await extractDocumentText(fullPath, ext);
        
        results.push({
          path: relative(MATERIALS_DIR, fullPath),
          name: entry.name,
          type: ext,
          week: week,
          content: content
        });
      }
    }
  } catch (err) {
    // Directory doesn't exist or can't be read
    console.error(`Could not read materials for week ${week}, type ${type}:`, err);
  }
  
  return results;
}

/**
 * List all available materials
 */
async function listAllMaterials(): Promise<{ [key: string]: string[] }> {
  const structure: { [key: string]: string[] } = {};
  
  for (const [typeName, typeDir] of Object.entries(MATERIAL_TYPES)) {
    const dir = join(MATERIALS_DIR, typeDir);
    structure[typeName] = [];
    
    try {
      const entries = await readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory()) {
          structure[typeName].push(entry.name);
        }
      }
      // Sort the results
      if (typeName === 'pastPapers') {
        // Sort years in descending order (newest first)
        structure[typeName].sort((a, b) => parseInt(b) - parseInt(a));
      } else {
        // Sort weeks naturally (week-1, week-2, etc.)
        structure[typeName].sort();
      }
    } catch (err) {
      // Directory doesn't exist yet
    }
  }
  
  return structure;
}

// Create the MCP server
const server = new McpServer({
  name: 'cloud-computing-mcp-server',
  version: '1.0.0',
});

// Tool: Search across all course materials
server.registerTool(
  'search-materials',
  {
    title: 'Search Course Materials',
    description: 'Search across all Cloud Computing course materials including lectures, tutorials, homework, and past papers',
    inputSchema: {
      query: z.string().describe('Search query to find in file names or content'),
      materialType: z.enum(['all', 'lectures', 'tutorials', 'tutorialAnswers', 'homework', 'homeworkAnswers', 'pastPapers'])
        .optional()
        .describe('Type of material to search (defaults to all)')
    },
    outputSchema: {
      results: z.array(z.object({
        path: z.string(),
        name: z.string(),
        type: z.string(),
        excerpt: z.string()
      })),
      count: z.number()
    }
  },
  async ({ query, materialType = 'all' }) => {
    const searchDir = materialType === 'all' 
      ? MATERIALS_DIR 
      : join(MATERIALS_DIR, MATERIAL_TYPES[materialType as keyof typeof MATERIAL_TYPES]);
    
    const results = await searchFiles(searchDir, query);
    
    const formattedResults = results.map(r => ({
      path: r.path,
      name: r.name,
      type: r.type,
      excerpt: r.content ? r.content.substring(0, 200) + '...' : 'No preview available'
    }));
    
    const output = {
      results: formattedResults,
      count: formattedResults.length
    };
    
    return {
      content: [{
        type: 'text',
        text: `Found ${output.count} results for "${query}":\n\n${JSON.stringify(formattedResults, null, 2)}`
      }],
      structuredContent: output
    };
  }
);

// Tool: Get materials for a specific week
server.registerTool(
  'get-week-materials',
  {
    title: 'Get Week Materials',
    description: 'Retrieve all materials for a specific week',
    inputSchema: {
      week: z.number().min(1).max(13).describe('Week number (1-13)'),
      materialType: z.enum(['lectures', 'tutorials', 'tutorialAnswers', 'homework', 'homeworkAnswers'])
        .describe('Type of material to retrieve')
    },
    outputSchema: {
      week: z.number(),
      type: z.string(),
      files: z.array(z.object({
        name: z.string(),
        path: z.string(),
        content: z.string()
      }))
    }
  },
  async ({ week, materialType }) => {
    const materials = await getWeekMaterials(week, materialType);
    
    const output = {
      week,
      type: materialType,
      files: materials.map(m => ({
        name: m.name,
        path: m.path,
        content: m.content || ''
      }))
    };
    
    return {
      content: [{
        type: 'text',
        text: `Week ${week} - ${materialType}:\n\n${JSON.stringify(output, null, 2)}`
      }],
      structuredContent: output
    };
  }
);

// Tool: List all past papers
server.registerTool(
  'list-past-papers',
  {
    title: 'List Past Papers',
    description: 'List all available past year papers organized by year (2015-2024)',
    inputSchema: {
      year: z.number().min(2015).max(2024).optional().describe('Filter by specific year (2015-2024)')
    },
    outputSchema: {
      papers: z.array(z.object({
        year: z.number(),
        name: z.string(),
        path: z.string()
      })),
      count: z.number(),
      years: z.array(z.number())
    }
  },
  async ({ year }) => {
    const dir = join(MATERIALS_DIR, MATERIAL_TYPES.pastPapers);
    const papers: Array<{ year: number; name: string; path: string }> = [];
    const availableYears = new Set<number>();
    
    try {
      const entries = await readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        if (entry.isDirectory()) {
          const yearNum = parseInt(entry.name);
          if (yearNum >= 2015 && yearNum <= 2024) {
            // If filtering by year, skip other years
            if (year && yearNum !== year) continue;
            
            availableYears.add(yearNum);
            const yearDir = join(dir, entry.name);
            
            try {
              const yearFiles = await readdir(yearDir, { withFileTypes: true });
              for (const file of yearFiles) {
                if (file.isFile()) {
                  papers.push({
                    year: yearNum,
                    name: file.name,
                    path: relative(MATERIALS_DIR, join(yearDir, file.name))
                  });
                }
              }
            } catch (err) {
              console.error(`Error reading year ${yearNum}:`, err);
            }
          }
        }
      }
    } catch (err) {
      console.error('Error reading past papers directory:', err);
    }
    
    // Sort by year (newest first) and then by name
    papers.sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      return a.name.localeCompare(b.name);
    });
    
    const output = {
      papers,
      count: papers.length,
      years: Array.from(availableYears).sort((a, b) => b - a)
    };
    
    return {
      content: [{
        type: 'text',
        text: year 
          ? `Found ${output.count} past papers for year ${year}:\n\n${JSON.stringify(output, null, 2)}`
          : `Found ${output.count} past papers across ${output.years.length} years:\n\n${JSON.stringify(output, null, 2)}`
      }],
      structuredContent: output
    };
  }
);

// Tool: Get past papers for a specific year
server.registerTool(
  'get-year-papers',
  {
    title: 'Get Year Papers',
    description: 'Get all past papers for a specific year',
    inputSchema: {
      year: z.number().min(2015).max(2024).describe('Year to retrieve papers from (2015-2024)')
    },
    outputSchema: {
      year: z.number(),
      papers: z.array(z.object({
        name: z.string(),
        path: z.string(),
        content: z.string().optional()
      })),
      count: z.number()
    }
  },
  async ({ year }) => {
    const yearDir = join(MATERIALS_DIR, MATERIAL_TYPES.pastPapers, year.toString());
    const papers: Array<{ name: string; path: string; content?: string }> = [];
    
    try {
      const entries = await readdir(yearDir, { withFileTypes: true });
      
      for (const entry of entries) {
        if (entry.isFile()) {
          const fullPath = join(yearDir, entry.name);
          const relativePath = relative(MATERIALS_DIR, fullPath);
          const ext = extname(entry.name);
          
          // Use extractDocumentText to handle PDFs properly
          const content = await extractDocumentText(fullPath, ext);
          
          papers.push({
            name: entry.name,
            path: relativePath,
            content: content || undefined
          });
        }
      }
    } catch (err) {
      console.error(`Error reading papers for year ${year}:`, err);
    }
    
    const output = {
      year,
      papers,
      count: papers.length
    };
    
    return {
      content: [{
        type: 'text',
        text: `Year ${year} - Found ${output.count} papers:\n\n${JSON.stringify(output.papers.map(p => ({ name: p.name, path: p.path })), null, 2)}`
      }],
      structuredContent: output
    };
  }
);

// Tool: Get course overview
server.registerTool(
  'get-course-overview',
  {
    title: 'Get Course Overview',
    description: 'Get an overview of all available course materials',
    inputSchema: {},
    outputSchema: {
      structure: z.record(z.array(z.string())),
      summary: z.string()
    }
  },
  async () => {
    const structure = await listAllMaterials();
    
    let summary = 'Cloud Computing Course Materials:\n\n';
    for (const [type, items] of Object.entries(structure)) {
      if (type === 'pastPapers') {
        summary += `${type}: ${items.length} years available (${items.join(', ')})\n`;
      } else {
        summary += `${type}: ${items.length} weeks\n`;
      }
    }
    
    const output = {
      structure,
      summary
    };
    
    return {
      content: [{
        type: 'text',
        text: summary + '\n\nFull structure:\n' + JSON.stringify(structure, null, 2)
      }],
      structuredContent: output
    };
  }
);

// Resource: Access specific document by path
server.registerResource(
  'document',
  new ResourceTemplate('cloudcomputing://document/{path}', { list: undefined }),
  {
    title: 'Course Document',
    description: 'Access a specific course document by path',
    mimeType: 'text/plain'
  },
  async (uri, { path }) => {
    const decodedPath = decodeURIComponent(path as string);
    const fullPath = join(MATERIALS_DIR, decodedPath);
    
    try {
      const ext = extname(fullPath);
      const content = await extractDocumentText(fullPath, ext);
      return {
        contents: [{
          uri: uri.href,
          text: content,
          mimeType: 'text/plain'
        }]
      };
    } catch (err) {
      throw new Error(`Could not read document at ${decodedPath}: ${err}`);
    }
  }
);

// Prompt: Study for specific week
server.registerPrompt(
  'study-week',
  {
    title: 'Study for Week',
    description: 'Get help studying materials for a specific week',
    argsSchema: {
      week: z.string().describe('Week number to study (1-13)'),
      focusArea: z.string().optional().describe('Specific topic or area to focus on')
    }
  },
  ({ week, focusArea }) => ({
    messages: [{
      role: 'user',
      content: {
        type: 'text',
        text: `I need help studying Week ${week} of Cloud Computing. ${focusArea ? `I want to focus on: ${focusArea}` : 'Please help me understand the key concepts.'}\n\nPlease:\n1. Retrieve the lecture notes for week ${week}\n2. Get the tutorial and answers for week ${week}\n3. Summarize the key concepts\n4. Help me understand any difficult topics`
      }
    }]
  })
);

// Prompt: Exam preparation
server.registerPrompt(
  'exam-prep',
  {
    title: 'Exam Preparation',
    description: 'Get help preparing for the Cloud Computing exam',
    argsSchema: {
      topics: z.string().optional().describe('Specific topics to focus on (comma-separated)')
    }
  },
  ({ topics }) => ({
    messages: [{
      role: 'user',
      content: {
        type: 'text',
        text: `Help me prepare for my Cloud Computing exam. ${topics ? `Focus on these topics: ${topics}` : 'Cover all major topics.'}\n\nPlease:\n1. List all available past papers\n2. Search for key concepts across all materials\n3. Create a study plan\n4. Help me practice with past paper questions`
      }
    }]
  })
);

// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);

console.error('Cloud Computing MCP Server running on stdio');
