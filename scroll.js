
(function ($) {
    'use strict';

    var project1 = $(".contact").offset();
    var style  = $(".social-icons ul li");      

    $(window).scroll(function() {
        

        if ( $(window).scrollTop() >= project1) {
            style.css('background-color', '#ffff');
        }
        
      
        
        
    });

})(jQuery);