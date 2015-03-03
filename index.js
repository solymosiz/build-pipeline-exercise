var express = require("express");
var app = express();

app.get('/myFancyEndpoint', function(req, res) {
    res.send('Hello there!');
});

app.listen(process.env.PORT, function() {
    console.log('Server started in the port: ', process.env.PORT);
});
	
	
	