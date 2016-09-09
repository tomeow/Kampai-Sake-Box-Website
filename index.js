// get the http module:
var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');


// this is the line that tells our server to use the "/assets" folder for static content
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());

// this is the line that tells our server to use the "/assets" folder for static content
app.use(bodyParser.urlencoded({extended: true}));

// Setting our Static Folder Directory
app.set('views', path.join(__dirname, './static'));

app.set('port', process.env.PORT || 5000);
app.use(express.static('assets'));

// Root Request
app.get('/', function (req, res) {

  res.sendFile(__dirname + '/static/html/base.html');
});

// Add User Request 
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    res.redirect('/');
})

// this is for heroku since you need to grab the port that
// heroku gives you instead of defaulting to 3000
var port = process.env.PORT || 5000;
app.listen(port, function(){
  console.log('listening port ' + port + '');
})
