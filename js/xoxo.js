$(function(){
	var _containerHeight = $('.xoxo').height();
	var _width, _height, _scrollHeight;
	var _scrollPercent = 0;
	var big_x;
	var big_o;
	var small_x;
	var small_o;
	var mousePos;
	var _mouseYfromCenter;
	var _mouseXfromCenter;

	function init() {
		resize();
		window.addEventListener('resize', resize);

		big_x = initPositions('.big-x .xo', 0.9, 0.25);
		big_o = initPositions('.big-o .xo', 0.9, 0.25);
		small_x = initPositions('.small-x .xo', 0.95, 0.1);
		small_o = initPositions('.small-o .xo', 0.95, 0.1);

		mousePos = { x: -1, y: -1 };
    $(document).mousemove(function(event) {
        mousePos.x = event.pageX;
        mousePos.y = event.pageY;
    });

		loop();
	}

	function resize() {
		_width = window.innerWidth;
	  _height = window.innerHeight;
	  _scrollHeight = _containerHeight-_height;
	}

	function initPositions(selector, baseScrollSpeed, basePerspectiveSpeed) {
		var arr = [];
	  $(selector).map(function(){
			var position = {
				top: parseInt(this.style['top']),
				left: parseInt(this.style['left']),
			};
			var depth = Math.random();
	    arr.push({
				element: this,
				position: position,
				originalPosition: Object.assign({}, position),
				scrollSpeed: baseScrollSpeed + depth/25,
				perspectiveSpeed: basePerspectiveSpeed + depth/10,
			});
		});
		return arr;
	}

	function updateElements(movingElements) {
	  for (var i = 0; i < movingElements.length; i++) {
	    var p = movingElements[i];
			var originTopWithPerspectiveShift = p.originalPosition.top - (_mouseYfromCenter*p.perspectiveSpeed)/100;
			p.position.top = (originTopWithPerspectiveShift + _scrollOffset * p.scrollSpeed) -_scrollOffset;
			p.position.left = p.originalPosition.left - (_mouseXfromCenter*p.perspectiveSpeed)/1000;

			p.element.style['top'] = p.position.top+'%';
			p.element.style['left'] = p.position.left+'%';
		}
	}

	function updateHeader() {
		var headerSpeed = -0.0005;
		var newX = headerSpeed * _mouseXfromCenter;
		var newY = headerSpeed * _mouseYfromCenter;

		$('.header').css('-webkit-transform', 'translate3d('+newX+'%,'+newY+'%,0)');
		$('.header').css('transform', 'translate3d('+newX+'%,'+newY+'5,0)');
	}

	function loop() {
	  _scrollOffset = window.scrollTop == undefined ? window.pageYOffset : window.scrollTop;
		_mouseYfromCenter = mousePos.y - _height/2;
		_mouseXfromCenter = mousePos.x - _width/2;
		updateElements(big_x);
		updateElements(big_o);
	  updateElements(small_x);
		updateElements(small_o);
		// updateHeader();

	  requestAnimationFrame(loop);
	}

	init();
});
