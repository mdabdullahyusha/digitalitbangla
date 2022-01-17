jQuery(document).ready(function($) {
  $('.counter').counterUp({
    delay: 10,
    time: 3000,
  });
   $navOffset = $('#nav-part').offset().top;
  $(window).scroll(function () {
        $scrolling = $(this).scrollTop();

        if ($scrolling > $navOffset) {
            $("#nav-part").addClass('navfixed');
        } else {
            $("#nav-part").removeClass('navfixed');
        }
        
    });
  var mixing = mixitup('.portfolio-box');
});