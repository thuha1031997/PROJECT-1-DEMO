$(document).ready(function() {
 
    var owl = $("#owl-demo");
   
    owl.owlCarousel({
        items:3,
        loop:true,
        margin:5,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
   
   
  });
  
  $(document).ready(function() {
 
    var owl = $("#owl-demo1");
   
    owl.owlCarousel({
        items:5,
        loop:true,
        margin:5,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
   
   
  });
  $(document).ready(function() {
 
    $('#owl-demo-banner').owlCarousel({
        // animateOut: 'slideOutDown',
        // animateIn: 'flipInX',
        items:1,
        margin:5,
        stagePadding:5,
        smartSpeed:300,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
   
  });
 