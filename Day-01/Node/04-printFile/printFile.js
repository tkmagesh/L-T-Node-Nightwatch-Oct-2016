var fs = require('fs');

fs.readFile('./test.txt', {encoding : 'utf8'}, function(err, fileContents){
	if (err){
		console.log(err.code, err.path, err.syscall);
		return;
	}
	console.log(fileContents);
});

