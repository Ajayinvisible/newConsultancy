const prevArrow =
  '<button class="btn p-2 slick-prev"><i class="material-icons">arrow_back</i></button>';
const nextArrow =
  '<button class="btn p-2 slick-next"><i class="material-icons">arrow_forward</i></button>';

$(document).ready(function () {
  $('.hero_slider').slick({
    prevArrow:
      '<button class="btn p-2 slick-prev"><i class="fa-solid fa-circle-arrow-left"></i></button>',
    nextArrow:
      '<button class="btn p-2 slick-next"><i class="fa-solid fa-circle-arrow-right"></i></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      lazyLoad: true,
      fade: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  });

  
  // studyAbroad slider

  $('.studyabroad__slide').slick({
    prevArrow:
    '<button class="btn p-2 slick-prev"><i class="fa-solid fa-circle-arrow-left"></i></button>',
    nextArrow:
    '<button class="btn p-2 slick-next"><i class="fa-solid fa-circle-arrow-right"></i></button>',
      slidesToShow: 2,
      slidesToScroll: 1,
      rows: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint : 1025,
          settings:{
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  })

  // top-edu slider

  $('.top-edu__slider').slick({
    prevArrow:
    '<button class="btn p-2 slick-prev"><i class="fa-solid fa-circle-arrow-left"></i></button>',
    nextArrow:
    '<button class="btn p-2 slick-next"><i class="fa-solid fa-circle-arrow-right"></i></button>',
    slidesToShow : 2,
    slidesToScroll: 1,
    rows: 2,
    autoplay:true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          rows:1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })
});
          
var duration = 500;
$(window).scroll(function() {
	if ($(this).scrollTop() > 200) {
    $('.to-top').fadeIn(duration);
	} else {
    $('.to-top').fadeOut(duration);
	}
});

$('.to-top').click(function(event) {
	event.preventDefault();
	$('html').animate({scrollTop: 0}, duration);
	return false;
})