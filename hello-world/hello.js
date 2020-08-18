var server = require('http');

server.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end("Hello world! \n");
}).listen(3000, 'localhost');

console.log('Server is running at http://localhost:3000/');