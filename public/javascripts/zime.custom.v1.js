var gridster;

$(function(){

    gridster = $(".gridster > ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [400, 200],
        min_cols: 2 // Changing this to intially 2 columns for 4x4
    }).data('gridster');

});

formatStamp = function (date, slktr) {
	date = new Date(date)
		, $ = jQuery;
		
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
		
	$('.'+slktr).html(months[date.getMonth()]+" "+ date.getDate()+", "+date.getFullYear()+" "+hours + ':' + minutes + ' ' + ampm)
}
