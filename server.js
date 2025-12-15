// Import the http module
const http = require('http');

// Create a basic HTTP server
http.createServer((req, res) => {
  res.write('Hello, World!');  // Write the response
  res.end();  // End the response
}).listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
