var weather = require('./routes/weather.js');


//BEGIN API routes
app.get('/api/weather', weather.list);
//END API routes