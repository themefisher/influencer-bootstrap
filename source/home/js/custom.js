(function ($) {
    'use strict';

    $(document).on('ready', function () {
        // -----------------------------
        //  Goto Link
        // -----------------------------
        $("#gDemo").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#demo").offset().top
		    }, 500);
		});

    });







})(jQuery);


