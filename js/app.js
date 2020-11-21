$(document).ready(function(){
$('.food-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
     {
       breakpoint: 994,
       settings: {
        slidesToShow: 2
       }
      },
      {

        breakpoint: 768,
        settings: {
         slidesToShow: 1
        }
     }
    ]
  });


  $('.nav-trigger').click(function(){
    $('.site-content-wrapper').toggleClass(('scaled'));
  });
}); 
