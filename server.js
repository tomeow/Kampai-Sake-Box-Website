//for details: https://scotch.io/tutorials/easy-node-authentication-setup-and-local
// server.js

// set up & get all the tools we need ========================================
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var mongoDbURI = process.env.MONGODB_URI || 'mongodb://localhost/kbs_db';
var passport = require('passport');
var flash    = require('connect-flash');
var path     = require("path");

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');


// var myApp = require('connect');

require('./login_registration/config/database.js');
var MongoStore = require('connect-mongo')(session);
// configuration ===============================================================
// mongoose.connect(configDB.url); // connect to our database

require('./login_registration/config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
// register static directory
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './login_registration/views'));
app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
// app.use(express.session({secret:'something'}));

app.use(session({
    secret:'secret',
    maxAge: new Date(Date.now() + 3600000),
    store: new MongoStore({ mongooseConnection: mongoose.connection },
        function(err){
            console.log(err || 'connect-mongodb setup ok');
        })
  })
);

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./login_registration/app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
