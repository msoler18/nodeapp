/* HTTP: Levantar un servidor web */
'use strict'

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  let timeUp = process.uptime();		
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h1>Server running from ${hostname} from port: ${port} in ${timeUp} miliseconds.</h1>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
