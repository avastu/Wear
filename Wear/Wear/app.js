
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var weather = require('./routes/weather');
var http = require('http');
var path = require('path');
var unirest = require('unirest');
var jade = require('jade');
var fs = require('fs');

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
app.post('/search', function (req, res) {
	var zipcode = req.body.zipcode;
	console.log('http://api.wunderground.com/api/a19c15048b521bab/forecast/q/' + zipcode + '.json');
    unirest.get('http://api.wunderground.com/api/a19c15048b521bab/forecast/q/' + zipcode + '.json',
    	function (response) {

        if (response.error) {
            res.send(500, response.error);
        }
        //because the API can return a success error code but not recognize any face we need to
        //check if we got a picture with a face detected.
        else {
        	// pop = [];
        	// high = [];
        	// low = [];
        	// conditions = [];
        	// //img = [];

            poptoday = response.body.forecast.simpleforecast.forecastday[0].pop;
            poptmrw = response.body.forecast.simpleforecast.forecastday[1].pop;
            hightoday = response.body.forecast.simpleforecast.forecastday[0].high.fahrenheit;
            hightmrw = response.body.forecast.simpleforecast.forecastday[1].high.fahrenheit;
            lowtoday = response.body.forecast.simpleforecast.forecastday[0].low.fahrenheit;
            lowtmrw = response.body.forecast.simpleforecast.forecastday[1].low.fahrenheit;
            conditionstoday = response.body.forecast.simpleforecast.forecastday[0].conditions;
            conditionstmrw = response.body.forecast.simpleforecast.forecastday[1].conditions;
            imgtoday = response.body.forecast.simpleforecast.forecastday[0].icon_url;
            imgtmrw = response.body.forecast.simpleforecast.forecastday[1].icon_url;

            console.log(poptoday);
            console.log(hightoday);
            console.log(lowtoday);
            console.log(conditionstoday);
            console.log(imgtoday);

            res.render('index', {poptoday: poptoday, hightoday: hightoday, lowtoday: lowtoday, conditionstoday: conditionstoday, zipcode: zipcode, imgtoday:imgtoday});

        }
		
        
    });
	
});

//END API routes

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
