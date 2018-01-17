/*
This script runs a local server for serving static files from a folder. It can be run as a module or from the command line. Usage from command line:

node server.js [rootPath='.'] [port=3000]
*/

const StaticServer = require('C:/Users/dwhieb/AppData/Roaming/npm/node_modules/static-server');

const rootPath = process.argv[2] || '.';  // the root folder the files will be served from
const port     = process.argv[3] || 3000; // the port to use

// Allow CORS
const server = new StaticServer({
  cors: '*',
  port,
  rootPath,
});

// Allow service workers
server.on(`request`, (req, res) => {
  res.set(`Service-Worker-Allowed`, `/`);
});

// Log information when server starts
const start = server.start(() => {
  console.log(`\nServer started. Press Ctrl+C to terminate.
    Serving from: ${rootPath}
    Port:         ${port}
    Time:         ${new Date}
    Node:         ${process.version}`);
});

// Start immediately if run from the command line
if (require.main === module) start();

// Export start method if run as a module
module.exports = start;
