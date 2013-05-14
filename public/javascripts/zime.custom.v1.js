var gridster;

$(function(){

    gridster = $(".gridster > ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140],
        min_cols: 6
    }).data('gridster');

});