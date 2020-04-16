/*first slider */
$(".slider-one")
.not("slick-initialized")
.slick({
    autoplay:true,
    autoplaySpeed:3000,
    prevArrow: '',
    nextArrow: '',
    dots: true
});


$(".slider-two")
.not("slick-initialized")
.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow:".site-slider-two.prev",
    nextArrow:".site-slider-two.next",
    autoplay: 3000
});
