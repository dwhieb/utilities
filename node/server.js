const express = require('C:/Users/dwhieb/AppData/Roaming/npm/node_modules/express');
const http    = require('http');

const app  = express();
// use a unique port so that the service worker doesn't interfere with other projects
const port = 3100;

app.set('port', port);
app.use(express.static('.'));

http.createServer(app).listen(port, () => {
  console.log(`\nServer started. Press Ctrl+C to terminate.
  Project:  app.digitallinguistics.io
  Port:     ${port}
  Time:     ${new Date}
  Node:     ${process.version}`);
});
