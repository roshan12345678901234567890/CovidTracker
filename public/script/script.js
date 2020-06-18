$(document).ready(function() {

    $('.flag-container').slick({
        dots: false,
        arrows: false,
        slidesToShow: 4,
        centerMode: true,
        slidesToScroll:10,
        autoplay:true,
        infinite:true,
        speed:100,
        centerMode:true,
        centerPadding: '0',
        draggable:true,
        responsive: [
          {
              breakpoint: 1024, // tablet breakpoint
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 480, // mobile breakpoint
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          }
      ]
      });

});