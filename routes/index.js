
/*
 * GET home page.
 */
var time = require('time');

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
		

        res.render('index', 
			{ 
				title: team,
				locs: locs
			});
    }
};
