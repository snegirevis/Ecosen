$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
   loop: true,
   items: 3, 
   autoplay:true,
   dots: false,
   nav: true,
   navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
   autoHeight:true,
  });

  $('#appStore').on('click', function(){
    window.open("https://apps.apple.com/kz/app/tazalyk/id1237486328"); 
  });

  $('#googlePlay').on('click', function(){
    window.open("https://play.google.com/store/apps/details?id=nextstep.kz.tazalyk"); 
  });

  ScrollReveal().reveal('#communication');
  ScrollReveal().reveal('#products');
  ScrollReveal().reveal('footer');

 

});

