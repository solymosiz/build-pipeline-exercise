var express = require("express");
var app = express();
var add = require("./add.js");

app.get('/add', function(req, res) {
    
    
    if (isFinite(req.query.a) && isFinite(req.query.b)){
    
        res.send( add(parseInt(req.query.a), parseInt(req.query.b) )+'');
    }
    else{
        res.send("kevés paraméter");
    }
});

app.listen(process.env.PORT, function() {
    console.log('Server started in the port: ', process.env.PORT);
});
	
	
	