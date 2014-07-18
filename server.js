/*var http = require("http"); 
http.createServer(function(request, response){
response.writeHead(200,{"Content-Type":"text/html"});
response.write("Hello World!");
response.end();
}).listen(3333);
console.log("Web Browser open http://localhost:3333")
*/

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);