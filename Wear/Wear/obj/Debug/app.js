﻿
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
<<<<<<< HEAD
<<<<<<< HEAD
var weather = require('./routes/weather');
=======
var user = require('./routes/user');
>>>>>>> origin/master
=======
var user = require('./routes/user');
>>>>>>> origin/master
var http = require('http');
var path = require('path');
var unirest = require('unirest');
var jade = require('jade');
var fs = require('fs');

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/master
=======
>>>>>>> origin/master
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//BEGIN API routes

app.get('/', routes.index);
app.get('/weather', weather.list);

//END API routes

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
<<<<<<< HEAD
<<<<<<< HEAD
});

=======
});
>>>>>>> origin/master
=======
});
>>>>>>> origin/master
