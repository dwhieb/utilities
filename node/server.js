const express = require('C:/Users/dwhieb/AppData/Roaming/npm/node_modules/express');
const http    = require('http');

const defaultPort   = process.argv[3] || 3000;
const defaultFolder = process.argv[2] || '.';

const start = ({ port = defaultPort, folder = defaultFolder } = {}) => {

  const app = express();

  app.set('port', port);
  app.use((req, res, next) => {
    res.set(`Service-Worker-Allowed`, `/`);
    next();
  });
  app.use(express.static(folder));

  const server = http.createServer(app).listen(port, () => {
    console.log(`\nServer started. Press Ctrl+C to terminate.
      Serving from: ${folder}
      Port:         ${port}
      Time:         ${new Date}
      Node:         ${process.version}`);
  });

  return server;

};

// if run from the command line
if (require.main === module) start({ port: defaultPort, folder: defaultFolder });

// if run as a module
module.exports = start;
