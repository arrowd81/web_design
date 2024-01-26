$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000, // Adjust the speed as needed
        dots: true,
        arrows: false,
        rtl: true
    });

    $('.top_news').slick({
        autoplay: true,
        autoplaySpeed: 5000, // Adjust the speed as needed
        slidesToShow:4,
        arrows: false,
        rtl: true,
    });
});