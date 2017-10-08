(function (){
    window.isMobile = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.isMobile = true;
    }
})(window);

(function (){
    'use strict';
    var eventKind = 'click';
    if(isMobile){
        eventKind = 'touchstart';
    }
    var toggle = true;
    var mobileBreakPoint = 768;
    $('#toggle-menu').on(eventKind, function(){
        if($(window).width() < mobileBreakPoint && toggle){
            toggle = false;
            $("#sidebar").animate({
                width: '85%'
            }, 350, function() {
                //animation complete
                $('#close-menu').css('display','block');
                $('.sidebar-content').css('display','block');
            });
        }
    });
    $('#close-menu').on(eventKind, function(){
        if(!toggle){
            toggle = true;
            $('#close-menu').css('display','none');
            $('.sidebar-content').css('display','none');
            $('#sidebar').animate({
                width:'44px'
            }, 350);
        }
    });
    var bpMobileEnable = true;
    var bpDestkopEnable = true;
    $(window).on('resize',function(){
        if($(window).width() > mobileBreakPoint){
            if(bpDestkopEnable){
                bpDestkopEnable = false;
                bpMobileEnable = true;
                $('#sidebar').css('width','240px');
                $('#close-menu').css('display','none');
                $('.sidebar-content').css('display','block');
            }
        }else{
            if(bpMobileEnable){
                bpDestkopEnable = true;
                bpMobileEnable = false;
                $('#sidebar').css('width','44px');
                $('#close-menu').css('display','none');
                $('.sidebar-content').css('display','none');
            }
        }
    });
})();
