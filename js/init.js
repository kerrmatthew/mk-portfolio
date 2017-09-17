$(function(){
  function init() {
    $('.header-wrapper').height(window.innerHeight);
    $('.header-wrapper').css('margin-bottom', 0);

    resize();
		window.addEventListener('resize', resize);
  }

  function resize() {
		var _width = window.innerWidth;
    if(_width <= 600) {
      $('.index-card').height(window.innerHeight*0.8);
      $('.index-card').width(window.innerWidth);
    } else {
      $('.index-card').css('height', '');
      $('.index-card').css('width', '');
    }
	}

  init();
});
