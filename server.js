
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB

mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://user1:user1@ds133261.mlab.com:33261/employees-demo');
// mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/employees-demo');
// mongoose.connection.on('error', function(){});

// Express
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//to block the favicon req
var http=require('http');
var server=http.createServer(function(req,res){
	if(req.method==='GET' && req.url==='/favicon.ico'){
		var fs=require('fs');
		fs.createReadStream('favicon.ico');;
		fs.pipe(res); //this will replace the call to end
	}
	else
	{
		res.end();
	}
});
//end favicon req


// Routes
app.use('/api', require('./routes/api'));
app.get('/favicon.ico', function(req, res) {
    res.send(200);
});
// Start server
var port = process.env.PORT || 8080;
// var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
// , ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
//app.listen(port, ip, function() {
var server=app.listen(port,  function(req,res) {
  console.log('Express server listening  on http://localhost: %d', port);
});
