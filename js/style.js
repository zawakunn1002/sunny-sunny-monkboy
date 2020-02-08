$(document).ready(function() {
    $('.drawer').drawer();
    $('.drawer-menu li').on('click', function() {
        $('.drawer').drawer('close');
    });
});

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots:false,
    mobileFirst: true,
    pauseOnFocus:false,
    pauseOnHover:false,
    fade: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll:1,
    responsive:[
        {
            breakpoint: 1024,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                fade: false,
            }
        },
    ]
});