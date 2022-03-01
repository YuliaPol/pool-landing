
jQuery(function ($) {
    $(document).ready(function () {
        //width of scroling line
        function setScrollWisth(){
            var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height();
            var scrollPercent = Math.round((s / (d - c)) * 100);
            if($('.progress-bar .proggres')){
                $('.progress-bar .proggres').css('width', scrollPercent + '%');
            }
        }
        setScrollWisth();
        //when page is scrolled
        $( window ).scroll(function() {
            setScrollWisth();
        });
        // preloader
        $('.load-wrapper').fadeOut();
        //animation
        AOS.init();
    });
});