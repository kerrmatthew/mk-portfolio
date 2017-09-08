$(function(){
	var _containerHeight = $('.xoxo').height();
	var _width, _height, _scrollHeight;
	var _scrollPercent = 0;
	var big_x;
	var big_o;
	var small_x;
	var small_o;
	var tracked;

	function init() {
		resize();
		window.addEventListener('resize', resize);

		big_x = initPositions('.big-x .xo');
		big_o = initPositions('.big-o .xo');
		small_x = initPositions('.small-x .xo');
		small_o = initPositions('.small-o .xo');;

		tracked = big_x[0];
		loop();
	}

	function resize() {
		_width = window.innerWidth;
	  _height = window.innerHeight;
	  _scrollHeight = _containerHeight-_height;
	}

	function initPositions(selector) {
		var arr = [];
	  $(selector).map(function(){
			// [element, currentPos, originPos]
			var pos = parseInt(this.style['top']);
	    arr.push([this, pos, pos]);
		});
		return arr;
	}

	function updateElements(movingElements, speed) {
	  for (var i = 0; i < movingElements.length; i++) {
	    var p = movingElements[i];
			p[1] = (p[2]+_scrollOffset*speed)-_scrollOffset;
			p[0].style['top'] = p[1]+'%';
		}
	}

	function loop() {
	  _scrollOffset = window.scrollTop == undefined ? window.pageYOffset : window.scrollTop;
	  _scrollPercent = _scrollOffset/_scrollHeight || 0;
		updateElements(big_x, 0.85);
		updateElements(big_o, 0.85);
	  updateElements(small_x, 0.65);
		updateElements(small_o, 0.65);
		// console.log(tracked[1]);

	  requestAnimationFrame(loop);
	}

	init();
});
