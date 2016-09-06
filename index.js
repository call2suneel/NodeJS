var http = require('http')
var port = process.env.PORT || 8081;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log("Request came")
  console.log("Listning Port::"+port);
  res.end('Hello MDC\n');
}).listen(port);
console.log("Listning Port::"+port);