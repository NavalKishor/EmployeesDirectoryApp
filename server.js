
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB

mongoose.connect('mongodb://user1:user1@ds133261.mlab.com:33261/employees-demo');
// mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/employees-demo');
// mongoose.connection.on('error', function(){});


//2nd try favico
const favicon = require('express-favicon');
// var path = require('path')

//end favicon
// Express
var app = express();
app.use(express.static(__dirname + '/public'));

//app.use(favicon(path.join(__dirname+'/public/images/favicon.ico' , { maxAge: 2592000000 })));
app.use(favicon(path.join(__dirname+'/public/favicon.ico', { maxAge: 2592000000 })));
//app.use(express.favicon(__dirname + '/public/favicon.ico', { maxAge: 2592000000 }));
//app.use(favicon(path.join(__dirname+'/favicon.ico' , { maxAge: 2592000000 })));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//to block the favicon req
// var http = require('http');

// http.createServer(function (q, r) { 

//   // control for favicon

//   if (q.url === '/favicon.ico') {
//     r.writeHead(200, {'Content-Type': 'image/x-icon'} );
//     r.end();
//     console.log('favicon requested');
//     return;
//   }

//   // not the favicon? say hai
//   console.log('hello');
//   r.writeHead(200, {'Content-Type': 'text/plain'} );
//   r.write('Hello, world!');
//   r.end();
  
// }).listen(8000);

//end favicon req


// Routes
app.use('/', require('./routes/api'));
// app.get('/favicon.ico', function(req, res) {
//     res.send(200);
//     res.end();
// });
// Start server
var port = process.env.PORT || 8080;
// var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
// , ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
//app.listen(port, ip, function() {
var server=app.listen(port,  function(req,res) {
  console.log('Express server listening  on http://localhost: %d', port);
});
