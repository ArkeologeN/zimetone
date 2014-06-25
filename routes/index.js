(function() {
	"use strict";
	
	var async = require('async'),
		request = require('request'),
		moment = require('moment-timezone');
	
	module.exports.index = function(req, res){
	    var team = req.param('team');
	    if ( typeof(team) == 'undefined') {
	        // Load popup screen.
	        res.render('join', { title: 'Express' });
	
	    } else {
	        // Make Rest calls etc.
	        var locations = {
	        	"Chicago": "America/Chicago",
	        	"Karachi": "Asia/Karachi",
	        	"Sydney": "Australia/Sydney",
	        	"Paris": "Europe/Paris"
	        }, _locations = {}, funcs = [];
	        
	        for (var l in locations) {
	        	var time = moment().tz(locations[l]).format('MMMM Do YYYY, h:mm:ss a'),
	        		func = function(fn) {
	        			request.get('http://api.openweathermap.org/data/2.5/weather?q='+ l +'&units=imperial', function(err, res, body) {
							if ( !err) {
								_locations[l].geo = JSON.parse(body);
							}
							return fn(err, body);
						});
	        		};
	        		
	        	_locations[l] = {
	        		time: time
	        	};
	        	
	        	funcs.push(func);
	        	
	        }
			
			async.parallel(funcs, function(err, results) {
				if ( err )
					console.log(err);
					
				res.render('index', { 
					title: team,
					locs: _locations
				});
			});
			
	    }
	};
})();
