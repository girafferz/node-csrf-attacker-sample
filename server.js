var http = require('http'),
    fs = require('fs');
var server = http.createServer();
server.on('request', function(req,res) {
		fs.readFile(__dirname + '/public_html/attacker.html', 'utf-8',function(err,data) {
				if(err){
				res.writeHead(404,{'content-Type': 'text/plain'});
				res.write("not found");
				return res.end();
				}
				res.writeHead(200,{'content-Type': 'text/html'});
				res.write(data);
				res.end();
				});
		});
server.listen(8082, 'localhost');
console.log("server listening ...8082");
