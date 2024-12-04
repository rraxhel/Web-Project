(function() {

	var	$window = window,
		$body = document.body,
		$header = document.getElementById('header'),
		$banner = document.getElementById('banner');

	// Breakpoints.
	var breakpoints = function() {
		var breakpoints = {
			xlarge: '(max-width: 1680px)',
			large: '(max-width: 1280px)',
			medium: '(max-width: 980px)',
			small: '(max-width: 736px)',
			xsmall: '(max-width: 480px)'
		};

		// Your breakpoints logic goes here.

		return breakpoints;
	};

	// Play initial animations on page load.
	window.addEventListener('load', function() {
		setTimeout(function() {
			$body.classList.remove('is-preload');
		}, 100);
	});

	// Header.
	if ($banner && $header.classList.contains('alt')) {

		window.addEventListener('resize', function() {
			window.dispatchEvent(new Event('scroll'));
		});

		$banner.addEventListener('scroll', function() {
			var bottom = $header.offsetHeight;

			if (window.scrollY > bottom) {
				$header.classList.add('alt');
			} else {
				$header.classList.remove('alt');
			}
		});
	}

	// Menu.
	var $menu = document.getElementById('menu');

	$menu._locked = false;

	$menu._lock = function() {
		if ($menu._locked)
			return false;

		$menu._locked = true;

		setTimeout(function() {
			$menu._locked = false;
		}, 350);

		return true;
	};

	$menu._show = function() {
		if ($menu._lock()) {
			$body.classList.add('is-menu-visible');
		}
	};

	$menu._hide = function() {
		if ($menu._lock()) {
			$body.classList.remove('is-menu-visible');
		}
	};

	$menu._toggle = function() {
		if ($menu._lock()) {
			$body.classList.toggle('is-menu-visible');
		}
	};

	$menu.addEventListener('click', function(event) {
		event.stopPropagation();

		// Hide.
		$menu._hide();
	});

	$menu.querySelector('.inner').addEventListener('click', function(event) {
		event.stopPropagation();
	});

	$menu.querySelector('.inner').addEventListener('click', function(event) {
		event.stopPropagation();
	});

	$menu.querySelector('.inner').addEventListener('click', function(event) {
		var href = event.target.getAttribute('href');

		event.preventDefault();
		event.stopPropagation();

		// Hide.
		$menu._hide();

		// Redirect.
		setTimeout(function() {
			window.location.href = href;
		}, 350);
	});

	$body.addEventListener('click', function(event) {
		if (event.target.getAttribute('href') === '#menu') {
			event.stopPropagation();
			event.preventDefault();

			// Toggle.
			$menu._toggle();
		}
	});

	$body.addEventListener('keydown', function(event) {
		// Hide on escape.
		if (event.keyCode == 27)
			$menu._hide();
	});

})();
