$(document).ready(function(){
  $('.header-wrapper').css('min-height' ,window.innerHeight);
  $('footer').css('min-height', window.innerHeight);
  $('.header-wrapper').css('margin-bottom', 0);
  $('.xoxo').fadeIn(500, 'linear');


  function calculateMargin(card) {
    var maxMargin = 200;
    var offset = $(card).offset().top + $(card).height() / 2;
    var pxFromMiddle = Math.abs(offset - window.innerHeight/2);
    var ratioFromCenter = Math.max(0, 1 - pxFromMiddle / (window.innerHeight / 2));
    return parseInt(maxMargin * ratioFromCenter);
  }

  if(window.innerWidth > 600){
    $('.xoxo').scroll(function() {
      $.each($('.index-card-wrapper'), function(i, card) {
        if(i % 2 == 0){
          var newMargin = calculateMargin(card);
          $(card).css('margin-top', newMargin);
          $(card).css('margin-bottom', newMargin);
        }
      });
    });
    console.log('varying card speed at '+window.innerWidth );
  } else {
    console.log('staying put at '+window.innerWidth );
  }
});
