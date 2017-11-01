jQuery(document).ready(function($) {

  //slick slider
  $(".lazy").slick({
    dots: true,
    nextArrow: '<i class="nextAr fa fa-chevron-right" aria-hidden="true"></i>',
    prevArrow: '<i class="prevAr fa fa-chevron-left" aria-hidden="true"></i>',
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true
  });

  //
  $('.responsive').slick({
  dots: false,
  infinite: true,
  slidesToShow: 9,
  slidesToScroll: 9,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


  $(function() { // DOM ready
     // Toggle open and close nav styles on click
     $('#nav-toggle').click(function() {
       $('nav ul').slideToggle();
     });
     // Hamburger to X toggle
     $('#nav-toggle').on('click', function() {
       this.classList.toggle('active');
     });
   }); // end DOM ready


   $(".box").hover(
     function () {
          $(this).find('.caret').addClass("bounce");
        },
        function () {
          $(this).find('.caret').removeClass("bounce");
        }
  );

    $(".box").hover(
      function () {
           $(this).find('.h3').addClass("h3-hover");
         },
         function () {
           $(this).find('.h3').removeClass("h3-hover");
         }
   );

//fade on scroll
   AOS.init({
  duration: 1200,
})



});
