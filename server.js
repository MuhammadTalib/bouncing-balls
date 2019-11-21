var express = require("express");
var app = express();
app.use(express.static('public'));

app.use('/css',express.static(__dirname+'/public/css'))
app.use('/js',express.static(__dirname+'/public'))
app.use('/images',express.static(__dirname+'/public/images'))

var server = app.listen(8000,function(){
	var port = server.address().port;
	console.log("Server Started at http://localhost:%s \nPress CTRL +C to shutdown", port,"OK")
})
