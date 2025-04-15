const http = require('http');

const hostname = '127.0.0.1';
const port = 7007; // Default Backstage backend port

const server = http.createServer((req, res) => {
  console.log(`Received request for: ${req.url}`);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin (for simplicity)
  res.end(JSON.stringify({ message: 'Hello from the Test App Backend!' }));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
