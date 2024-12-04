document.addEventListener('DOMContentLoaded', function() {
	var $window = window,
	  $body = document.body,
	  $wrapper = document.getElementById('wrapper');

	// Breakpoints.
	breakpoints({
	  xlarge:   [ '1281px',  '1680px' ],
	  large:    [ '981px',   '1280px' ],
	  medium:   [ '737px',   '980px'  ],
	  small:    [ '481px',   '736px'  ],
	  xsmall:   [ '361px',   '480px'  ],
	  xxsmall:  [ null,      '360px'  ]
	});

	// Play initial animations on page load.
	window.addEventListener('load', function() {
	  setTimeout(function() {
		$body.classList.remove('is-preload');
	  }, 100);
	});

	// Browser fixes.
	// (Omitted browser fixes for brevity)

	// Smooth scroll.
	document.querySelectorAll('.smooth-scroll').forEach(function(element) {
	  element.addEventListener('click', function(event) {
		event.preventDefault();
		var targetId = this.getAttribute('href').substring(1);
		var targetElement = document.getElementById(targetId);
		if (targetElement) {
		  window.scrollTo({
			top: targetElement.offsetTop,
			behavior: 'smooth'
		  });
		}
	  });
	});

	// Wrapper.
	document.querySelectorAll('#wrapper > *').forEach(function(element) {
	  // (Omitted scrollex initialization for brevity)
	});

	// Items.
	document.querySelectorAll('.items').forEach(function(element) {
	  // (Omitted scrollex initialization for brevity)
	  element.children[0].innerHTML = '<div class="inner">' + element.children[0].innerHTML + '</div>';
	});

	// Gallery.
	document.querySelectorAll('.gallery').forEach(function(element) {
	  // (Omitted scrollex initialization for brevity)
	  var innerElement = element.children[0];
	  innerElement.style.overflowY = browser.mobile ? 'visible' : 'hidden';
	  innerElement.style.overflowX = browser.mobile ? 'scroll' : 'hidden';
	  innerElement.scrollLeft = 0;

	  // Style #2.
	  element.addEventListener('wheel', function(event) {
		var delta = event.deltaX * 10;
		if (delta > 0) delta = Math.min(25, delta);
		else if (delta < 0) delta = Math.max(-25, delta);
		innerElement.scrollLeft += delta;
	  });

	  // (Omitted mouseenter and mouseleave event listeners for gallery navigation)
	});

	// Lightbox.
	document.querySelectorAll('.gallery.lightbox').forEach(function(element) {
	  // (Omitted lightbox initialization for brevity)
	});
  });
