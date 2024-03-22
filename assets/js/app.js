$('.slider_1').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1062,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 964,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 564,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 300,
            }
        }
    ]
});
$('.slider_2').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1062,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 964,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 564,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 300,
            }
        }
    ]
});