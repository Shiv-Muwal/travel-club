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
            breakpoint: 812,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 793,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                speed: 300,
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
            breakpoint: 784,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 753,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                speed: 300,
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
const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");
const navLink = document.querySelectorAll(".nav_link");
navLink.forEach(a => a.addEventListener("click", () => {
    menulist.classList.toggle("show");
    document.body.classList.remove("overflow-hidden");
    menuicon.classList.toggle("show");
}))
menuicon.addEventListener("click", () => {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overflow-hidden");
    menuicon.classList.toggle("show");
});