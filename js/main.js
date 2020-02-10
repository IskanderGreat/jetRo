$(function() {

    let header = $('.header'),
        scrollPrev = 0;
    
    $(window).scroll(function() {
        let scrolled = $(window).scrollTop();
        if( scrolled > 50 && scrolled > scrollPrev) {
            header.addClass('header_out');
            header.removeClass('header_bg');
        } else if ( scrolled == 0 ){
            header.removeClass('header_bg');
        } else {
            header.removeClass('header_out');
            header.addClass('header_bg');
        }
        scrollPrev = scrolled;
    });

    $('.slider-main').slick({
        nextArrow: '<img class="slider-main__arrow-right" src="img/icon/arrow-right.svg" alt="arrow">',
        prevArrow: '<img class="slider-main__arrow-left" src="img/icon/arrow-left.svg" alt="arrow">',
        asNavFor: '.slider-dots',
        fade: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    $('.slider-dots').slick({
        variableWidth: true,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '.slider-main',
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 5,
                    variableWidth: false,
                }
            },
        ]
    });

    $('.header__burger').click(function(){
        $('.header__burger, .header__list, .header__logo').toggleClass('active');
        $('body').toggleClass('lock');
    });
});