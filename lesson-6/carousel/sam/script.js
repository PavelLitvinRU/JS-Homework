var route;
$('.map').draggable({
    drag: function(event, ui) {
        var w = $(this).parent().width() - $(this).width();
        ui.position.left > 0 && (ui.position.left = 0);
        ui.position.left < w && (ui.position.left = w);
    },
    start: function(event, ui) {
        route = ui.position.left
    },
    stop: function(event, ui) {
        var pos = {},
            w = Math[route[1] < ui.position.left ? 'ceil' : 'floor'](ui.position.left / 175) * 175;
        $(this).animate({ left: w }, 600);
    }
})