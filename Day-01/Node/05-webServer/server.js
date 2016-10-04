var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url'),
	chalk = require('chalk');

var server = http.createServer(function(req, res){
	console.log(chalk.red(req.method) + ' \t- ' + chalk.green(url.parse(req.url).pathname));
	req.url = req.url === '/' ? '/index.html' : req.url;
	var urlObj = url.parse(req.url);
	var resource = path.join(__dirname, urlObj.pathname);
	if (!fs.existsSync(resource)){
		res.statusCode = 404;
		res.end();
		return;
	}
	fs.createReadStream(resource).pipe(res);
});

server.listen(8080);
console.log('server listening on port 8080');
