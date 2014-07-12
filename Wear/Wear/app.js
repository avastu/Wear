
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
<<<<<<< HEAD
var weather = require('./routes/weather');
=======
<<<<<<< HEAD
=======
var weather = require('./routes/weather');
>>>>>>> d1448bad0edc31358873b7437fddfd8d322b097b
>>>>>>> origin/master
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
        	pop = [];
        	high = [];
        	low = [];
        	conditions = [];
        	city = response.body.forecast.simpleforecast.forecastday[0].date.tz_long;
        	//img = [];
            pop[0] = response.body.forecast.simpleforecast.forecastday[0].pop;
            pop[1] = response.body.forecast.simpleforecast.forecastday[1].pop;
            high[0] = response.body.forecast.simpleforecast.forecastday[0].high.fahrenheit;
            high[1] = response.body.forecast.simpleforecast.forecastday[1].high.fahrenheit;
            low[0] = response.body.forecast.simpleforecast.forecastday[0].low.fahrenheit;
            low[1] = response.body.forecast.simpleforecast.forecastday[1].low.fahrenheit;
            conditions[0] = response.body.forecast.simpleforecast.forecastday[0].conditions;
            conditions[1] = response.body.forecast.simpleforecast.forecastday[1].conditions;
            //img[0] = response.body.forecast.simpleforecast.forecastday[0].icon_url;
            //img[1] = response.body.forecast.simpleforecast.forecastday[1].icon_url;

            console.log(pop);
            console.log(high);
            console.log(low);
            console.log(conditions);
            //console.log(img);

            res.render('index', {pop: pop, high: high, low: low, conditions: conditions});

        }
		
        
    });
	
});

//END API routes

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

