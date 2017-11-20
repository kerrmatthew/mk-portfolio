$(document).ready(function(){
  $('.header-wrapper').css('min-height' ,window.innerHeight);
  $('footer').css('min-height', window.innerHeight);
  $('.header-wrapper').css('margin-bottom', 0);
  $('.xoxo').fadeIn(500, 'linear');

  if(window.innerWidth < 600){
    $('html').css({position:'fixed', overflow:'hidden'});
    $('body').css({position:'fixed', overflow:'hidden'});
  }
});
