var http = require('http');

http.createServer(function(request,response){
response.writeHead(200);
response.end('<h1>Hi u! :D</h1>');

}).listen(8080);

console.log('running');
