
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
        res.render('index', { title: 'Express' });
    }
};