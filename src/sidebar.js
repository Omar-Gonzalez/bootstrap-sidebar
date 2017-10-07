(function (){
    'use strict';
    var wWidth = $(window).width();
    var toggle = true;
    var mobileBreakPoint = 768;
    $('#toggle-menu').on('touchstart', function(){
        if(wWidth < mobileBreakPoint && toggle){
            toggle = false;
            $("#sidebar").animate({
                width: '85%'
            }, 350, function() {
                //animation complete
                $('#close-menu').css('display','block');
            });
        }
    });
    $('#close-menu').on('touchstart', function(){
        if(!toggle){
            toggle = true;
            $('#close-menu').css('display','none');
            $('#sidebar').animate({
                width:'44px'
            }, 350);
        }
    });
})()

