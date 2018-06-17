$(function(){

    $('.menu-toggle').click(function () {
        $(this).toggleClass('active');
        $('.menu').slideToggle(400);
    });

    $('.tabs a').click(function () {
       $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
       $(this).parent().siblings().removeClass('active');

       var id = $(this).attr('href');

       $(id).removeClass('hide');
       $(this).parent().addClass('active');

       return false;
    });

    $('.banner-slider, .testimonial-slider').slick({
       arrows: false,
       dots: true,
    });

    $('.portfolio-slider').slick({
        dots: true,
        appendArrows: '.portfolio-slider__buttons',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [
            {
            breakpoint: 767,
            settings: {
                dots: false
            }
        }
        ]
    });

    $nav_tab_slider = $('.nav-tab-list');
    settings = {
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        infinite: false
    };

    $nav_tab_slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
        $(this).find('.slick-current').siblings().removeClass('active');

        var id = $(this).find('.slick-current a').attr('href');

        $(id).removeClass('hide');
        $(this).find('.slick-current').addClass('active');

        return false;
    });

    $(window).on('resize load', function () {
        if($(window).width() > 767) {
            if($nav_tab_slider.hasClass('slick-initialized')) {
                $nav_tab_slider.slick('unslick');
            }
            return;
        }
        if(!$nav_tab_slider.hasClass('slick-initialized')) {
            return $nav_tab_slider.slick(settings);
        }
    });

});

function initMap() {
    var coordinales = {lat: 49.8415831, lng: 24.026497},
        markerImg = "img/marker.png";

    //creating map and get settings
    var map = new google.maps.Map(document.getElementById("map"), {
       center: coordinales,
       zoom: 16,
       disableDefaultUI: true,
       scrollwheel: false,
    });

    //marker
    var marker = new google.maps.Marker({
        position: coordinales,
        map: map,
        animation: gogole.maps.Animation.DROP,
        icon: markerImg,
    });
}

//initialize Map after page load
gogole.maps.event.addDomListener(window, 'load', initMap);

   


