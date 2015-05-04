$(document).ready(function() {

    $('.tab-panels .panel-buttons li').on('click', function() {
        var $panel = $(this).closest('.tab-panels');

        $panel.find('.panel-buttons li.active').removeClass('active');
        $(this).addClass('active');
        var panelToShow = $(this).attr('data-panel');

        //Hide current panel
        $panel.find('.panel.active').fadeIn(300, showNextPanel);

        //Show the next panel
        function showNextPanel() {
            $(this).removeClass('active');
            $('#' + panelToShow).fadeOut(200, function () {
                $(this).addClass('active');
            });
        }
    });

    $('.tool-tip').tooltip({
        track: true
    });

});