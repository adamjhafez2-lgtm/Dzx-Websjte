// server.js - Simple Node.js HTTP Server
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 2050;
const HOST = '127.0.0.1';

// MIME types for different file extensions
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain'
};

// Create HTTP server
const server = http.createServer((req, res) => {
  console.log(`${new Date().toLocaleTimeString()} - ${req.method} ${req.url}`);
  
  // Remove query string
  let filePath = req.url.split('?')[0];
  
  // Default to index.html
  if (filePath === '/' || filePath === '') {
    filePath = '/index.html';
  }
  
  // Get full file path
  const fullPath = path.join(__dirname, filePath);
  const extname = path.extname(fullPath);
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';
  
  // Read file
  fs.readFile(fullPath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found - try index.html
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
          if (err) {
            res.writeHead(404);
            res.end('404 - File Not Found');
          } else {
            res.writeHead(200, { 
              'Content-Type': 'text/html',
              'Access-Control-Allow-Origin': '*'
            });
            res.end(content);
          }
        });
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success - serve file
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });
      res.end(content);
    }
  });
});

// Start server
server.listen(PORT, HOST, () => {
  console.clear();
  console.log('='.repeat(60));
  console.log('🚀 DZX Universal Website - Node.js Server');
  console.log('='.repeat(60));
  console.log(`📂 Serving from: ${__dirname}`);
  console.log(`🌐 Server URL: http://${HOST}:${PORT}`);
  console.log(`🔗 Local URL: http://localhost:${PORT}`);
  console.log('='.repeat(60));
  console.log('✅ Server is running!');
  console.log('📋 Available pages:');
  console.log('   • /              - Home page');
  console.log('   • /#script       - Script page');
  console.log('   • /#features     - Features page');
  console.log('   • /#community    - Community page');
  console.log('='.repeat(60));
  console.log('💡 Press Ctrl + C to stop the server');
  console.log('='.repeat(60));
  
  // Try to open browser automatically
  const { exec } = require('child_process');
  const url = `http://${HOST}:${PORT}`;
  
  let command;
  switch (process.platform) {
    case 'darwin': // macOS
      command = `open ${url}`;
      break;
    case 'win32': // Windows
      command = `start ${url}`;
      break;
    default: // Linux
      command = `xdg-open ${url}`;
  }
  
  exec(command, (err) => {
    if (err) {
      console.log(`🌐 Open manually: ${url}`);
    } else {
      console.log('✅ Opening in browser...');
    }
  });
});

// Handle Ctrl+C
process.on('SIGINT', () => {
  console.log('\n\n🛑 Server stopped');
  process.exit(0);
});