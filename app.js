
var express = require('express')
    , routes = require('./routes')
    , engine = require('ejs-locals')
    , http = require('http')
    , path = require('path');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    //app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.engine('ejs',engine);

app.locals.formatStamp = function (date) {
	var months = [
		"January", "Febrary", "March",
		"April", "May","June", "July",
		"August", "September", "October",
		"November", "December"
	], days = [
			"Sunday", "Monday", "Tuesday",
			"Wednesday", "Thursday", "Friday",
			"Saturday", "Sunday"
		]
		
	var hours = date.getHours()
		, minutes = date.getMinutes()
		,ampm = hours >= 12 ? 'pm' : 'am';
	  hours = hours % 12;
	  hours = hours ? hours : 12; // the hour '0' should be '12'
	  minutes = minutes < 10 ? '0'+minutes : minutes;
		
	return months[date.getMonth()]+" "+ date.getDate()+", "+date.getFullYear()+" "+hours + ':' + minutes + ' ' + ampm
}



app.configure('development', function(){
    app.use(express.errorHandler());
});

app.get('/:team?', routes.index);

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
