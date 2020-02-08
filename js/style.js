$(document).ready(function() {
    $('.drawer').drawer();
    $('.drawer-menu li').on('click', function() {
        $('.drawer').drawer('close');
    });
});

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
    slidesToShow: 2,
    slidesToScroll:1,
    responsive:[
        {
            breakpoint: 768,
            settings:{
                slidesToShow:1,
            }
        },
    ]
});