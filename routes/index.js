
/*
 * GET home page.
 */

exports.index = function(req, res){
    var team = req.param('team');
    if ( typeof(team) == 'undefined') {
        // Load popup screen.
        res.render('join', { title: 'Express' });

    } else {
        // Make Rest calls etc.
        var locs = {
			"us": "America/Chicago",
			"pk": "Asia/Karachi",
			"aus": "Australia/Sydney"
		}
        var time = require('time');
        res.render('index', 
			{ 
				title: 'Express',
				time: [
					(new time.Date()).setTimezone(locs['us']),
					(new time.Date()).setTimezone(locs['pk']),
					(new time.Date()).setTimezone(locs['aus']),
				]
			});
    }
};

function _dateMaker(d) {
	var months = []
}
