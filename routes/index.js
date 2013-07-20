
/*
 * GET home page.
 */
var time = require('time')
	, async = require('async')
	, request = require('request')

exports.index = function(req, res){
    var team = req.param('team');
    if ( typeof(team) == 'undefined') {
        // Load popup screen.
        res.render('join', { title: 'Express' });

    } else {
        // Make Rest calls etc.
        var locs = {
			"Chicago": {
					time: (new time.Date()).setTimezone("America/Chicago"),
			},
			"Karachi": {
					time: (new time.Date()).setTimezone("Asia/Karachi"),
			},
			"Sydney": {
					time: (new time.Date()).setTimezone("Australia/Sydney"),
			},
			"Paris": {
					time: (new time.Date()).setTimezone("Europe/Paris"),
			}
		}
		
		/*
		 * var funcs = []
		for (var x in locs) {
			var url = 'http://api.openweathermap.org/data/2.5/weather?q='+x
			console.log(url);
			funcs.push(function(callback) {
				request.get(url, function(err, res, body) {
					console.log(body);
					callback(null, body);
				});
			});
		}
		*/
		
		async.parallel([
			function(cb) {
				request.get('http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial', function(err, res, body) {
					cb(null, body);
				});
			},
			function(cb) {
				request.get('http://api.openweathermap.org/data/2.5/weather?q=Karachi&units=imperial', function(err, res, body) {
					cb(null, body);
				});
			},
			function(cb) {
				request.get('http://api.openweathermap.org/data/2.5/weather?q=Sydney&units=imperial', function(err, res, body) {
					cb(null, body);
				});
			},
			function(cb) {
				request.get('http://api.openweathermap.org/data/2.5/weather?q=Paris&units=imperial', function(err, res, body) {
					cb(null, body);
				});
			}
		], function(err, results) {
			if ( err )
				console.log(err)
				
			var counter = 0;
			for (var x in locs) {
				locs[x].geo = JSON.parse(results[counter]);
				counter++;
			}
			
			res.render('index', { 
				title: team,
				locs: locs
			});
		});
		
    }
};
