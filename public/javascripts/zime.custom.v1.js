var gridster;

$(function(){

    gridster = $(".gridster > ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [400, 200],
        min_cols: 2 // Changing this to intially 2 columns for 4x4
    }).data('gridster');

});
