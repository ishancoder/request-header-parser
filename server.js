var express = require('express');

var app = express();

var re = /\([^\(\)]*\)/;

app.get('/', function(req, res){
	var os = lang = null;
	os = req.headers['user-agent'].match(re)[0];
	lang = req.headers['accept-language'].split(",")[0];
	res.json({
		"ipaddress":req.headers['x-forwarded-for'],
		"language": lang,
		"software":os.substring(1,(os.length - 1))
	});
});

app.listen(process.env.PORT || 8080, function(){
	console.log("Listening on PORT 8080...");
});