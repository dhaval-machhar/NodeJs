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

$('.slider-three').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $(".slider-four")
.not("slick-initialized")
.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow:".site-slider-two.prev",
    nextArrow:".site-slider-two.next",
    autoplay: 3000
});