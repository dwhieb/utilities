const express = require('C:/Users/dwhieb/AppData/Roaming/npm/node_modules/express');
const http    = require('http');

const app  = express();
// use a unique port so that the service worker doesn't interfere with other projects
const port = 3001;
const folder = process.argv[2] || '.';

app.set('port', port);
app.use(express.static(folder));

http.createServer(app).listen(port, () => {
  console.log(`\nServer started. Press Ctrl+C to terminate.
  Serving from: ${folder}
  Port:         ${port}
  Time:         ${new Date}
  Node:         ${process.version}`);
});
