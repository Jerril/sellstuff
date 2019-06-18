/*
 Helpers
*/
function closestParent(el, selector) {
    var matchesFn;

    // find vendor prefix
    ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
        if (typeof document.body[fn] == 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    })

    var parent;

    // traverse parents
    while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
            return parent;
        }
        el = parent;
    }

    return null;
}


/*
 Toggle
*/
(function() {

	var toggle = document.querySelectorAll('[data-toggle]');


	toggle.forEach(function (cur, index) {

		var toggleValue = cur.getAttribute('data-toggle');

		switch(toggleValue) {
			case 'dropdown': dropdown(cur);
				break;

			case 'dialog': dialog(cur);
				break;
		}

	});

	// dropdown
	function dropdown(el) {

		el.addEventListener('click', dropdownToggle);

		function dropdownToggle (e) {

			e.preventDefault();

			var d = this;

			e.stopPropagation();

			d.querySelector('.dropdown').addEventListener('click', function (e) {
				e.stopPropagation();
			});
			
			d.classList.toggle('open');

			window.addEventListener('click', function () {
				d.classList.remove('open');		
			});
		
		}
	}


	// dialog
	function dialog (el) {

		el.addEventListener('click', function (e) {

			var target = this.getAttribute('data-target');

			document.querySelector(target).classList.toggle('open');

		});

	}

})();


/*
 Close
*/
(function() {

	var close = document.querySelectorAll('[data-close]');

	close.forEach(function (cur, index) {

		cur.addEventListener('click', closeElement);

	});

	function closeElement (e) {

		e.preventDefault();

		closestParent(this, '.dialog').classList.remove('open');

	}

})();


/*
 navbar scrolled
 */
(function () {

	var navbar = document.querySelector('.navbar');

	window.addEventListener('scroll', function () {

		if (this.scrollY > 100) {
			navbar.classList.add('navbar-scroll-collapse');
		} else {
			navbar.classList.remove('navbar-scroll-collapse');
		}

	});

})();

/* owl-carousel */
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	loop: true,
  	nav: true,
  	navText: ['<span class="icon-angle-left"></span>', '<span class="icon-angle-right"></span>']
  });
});